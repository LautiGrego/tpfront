import React from "react";
import { useForm } from "react-hook-form";

export default function VehiculoRegistro({
  AccionABMC,
  Item,
  Grabar,
  Volver,
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

          {/* campo Modelo */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Modelo">
                Modelo<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                {...register("Modelo", {
                  required: { value: true, message: "Modelo es requerido" },
                  minLength: {
                    value: 4,
                    message: "Modelo debe tener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 55,
                    message: "Modelo debe tener como máximo 55 caracteres",
                  },
                })}
                autoFocus
                className={
                  "form-control " + (errors?.Modelo ? "is-invalid" : "")
                }
              />
              {errors?.Modelo && touchedFields.Modelo && (
                <div className="invalid-feedback">
                  {errors?.Modelo?.message}
                </div>
              )}
            </div>
          </div>

          {/* campo Cantidad*/}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Cantidad">
                Cantidad <span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number" step=".01"
                {...register("Cantidad", {
                  required: { value: true, message: "Cantidad  es requerido" },
                  min: {
                    value: 0.01,
                    message: "Cantidad debe ser mayor a 0",
                  },
                  max: {
                    value: 99999999.99,
                    message: "Cantidad debe ser menor o igual a 99999.99",
                  },
                })}
                className={
                  "form-control " + (errors?.Cantidad? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">{errors?.Cantidad?.message}</div>
            </div>
          </div>
          
          {/* campo FechaLanzamiento */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="FechaLanzamiento">
                Fecha de Nacimiento<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="date"
                {...register("FechaLanzamiento", {
                  required: { message: "Fecha Nacimiento es requerido" }
                })}
                className={
                  "form-control " + (errors?.FechaLanzamiento ? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">
                {errors?.FechaLanzamiento?.message}
              </div>
            </div>
          </div>

          {/* campo Activo */}
          <div className="row">
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
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-check"></i> Grabar
              </button>
            )}
            <button
              type="button"
              className="btn btn-warning"
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

