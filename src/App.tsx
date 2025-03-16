import { Controller, useForm } from "react-hook-form";
import "./App.css";

type FormData = {
  name: string;
  date: string;
  subject: string;
  description: string;
};

export default function App() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: { name: "", date: "", subject: "", description: "" },
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div>
      <h1>Evento</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <input type="text" placeholder="Nome do evento" {...field} />
          )}
        />
        <span className="error">Nome é obrigatório</span>

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <input
              type="date"
              placeholder="Nome do evento"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Selecione...
              </option>

              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Javascript">Javascript</option>
              <option value="Typescript">Typescript</option>
            </select>
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <textarea placeholder="Descrição" rows={4} {...field} />
          )}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
