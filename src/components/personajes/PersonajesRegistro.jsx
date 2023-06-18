import React from "react";
import { useForm } from "react-hook-form";

export default function PersonajesRegistro({
  AccionABMC,
  Item,
  Grabar,
  Volver,
  ComidaFavorita,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: Item });

  const onSubmit = (data) => {
    Grabar(data);
  };
  if (!Item) return null;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-fluid">

        <fieldset disabled={AccionABMC === "C"}>

          {/* campo nombre */}
          <div className="row div-reg">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Nombre">
                Nombre<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                {...register("Nombre", {
                  required: { value: true, message: "Nombre es requerido" },
                  minLength: {
                    value: 4,
                    message: "Nombre debe tener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 55,
                    message: "Nombre debe tener como máximo 55 caracteres",
                  },
                })}
                autoFocus
                className={
                  "form-control " + (errors?.Nombre ? "is-invalid" : "")
                }
              />
              {errors?.Nombre && touchedFields.Nombre && (
                <div className="invalid-feedback">
                  {errors?.Nombre?.message}
                </div>
              )}
            </div>
          </div>

          {/* campo NivelDePoder*/}
          <div className="row div-reg">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="NivelDePoder">
                Nivel de Poder<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number" step=".01"
                {...register("NivelDePoder", {
                  required: { value: true, message: "Nivel de Poder es requerido" },
                  min: {
                    value: 0.01,
                    message: "NivelDePoder debe ser mayor a 0",
                  },
                  max: {
                    value: 99999999.99,
                    message: "NivelDePoder debe ser menor o igual a 99999.99",
                  },
                })}
                className={
                  "form-control " + (errors?.NivelDePoder? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">{errors?.NivelDePoder?.message}</div>
            </div>
          </div>
          

          <div className="row div-reg">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="ComidaFavorita">
                Comida Favorita<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <select
                {...register("ComidaFavorita", {
                  required: { value: true, message: "Comida es requerido" },
                })}
                className={
                  "form-control " +
                  (errors?.ComidaFavorita ? "is-invalid" : "")
                }
              >
                <option value="" key={1}></option>
                {ComidaFavorita?.map((x) => (
                  <option value={x.Id} key={x.Id}>
                    {x.Nombre}
                  </option>
                ))}
              </select>
              <div className="invalid-feedback">
                {errors?.ComidaFavorita?.message}
              </div>
            </div>
          </div>

          {/* campo fechaNacimiento */}
          <div className="row div-reg">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="fechaNacimiento">
                Fecha de Nacimiento<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="date"
                {...register("fechaNacimiento", {
                  required: { message: "Fecha Nacimiento es requerido" }
                })}
                className={
                  "form-control " + (errors?.fechaNacimiento ? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">
                {errors?.fechaNacimiento?.message}
              </div>
            </div>
          </div>

          {/* campo Activo */}
          <div className="row div-reg">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Activo">
                Activo<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <select
                name="Activo"
                {...register("Activo", {
                  required: { value: true, message: "Activo es requerido" },
                })}
                className={
                  "form-control" + (errors?.Activo ? " is-invalid" : "")
                }
                disabled
              >
                <option value={null}></option>
                <option value={false}>NO</option>
                <option value={true}>SI</option>
              </select>
              <div className="invalid-feedback">{errors?.Activo?.message}</div>
            </div>
          </div>

        </fieldset>

        {/* Botones Grabar, Cancelar/Volver' */}
        <hr />
        <div className="row justify-content-center div-reg">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <button type="submit" className="btn-grabar btn btn-primary">
                <i className="fa fa-check"></i> Grabar
              </button>
            )}
            <button
              type="button"
              className="btn-cancelar btn btn-warning"
              onClick={() => Volver()}
            >
              <i className="fa fa-undo"></i>
              {AccionABMC === "C" ? " Volver" : " Cancelar"}
            </button>
          </div>
        </div>

        {/* texto: Revisar los datos ingresados... */}
        {!isValid && isSubmitted && (
          <div className="row alert alert-danger mensajesAlert">
            <i className="fa fa-exclamation-sign"></i>
            Revisar los datos ingresados...
          </div>
        )}

      </div>
    </form>
  );
}

