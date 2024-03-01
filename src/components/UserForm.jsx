const UserForm = ({ data, updateFieldHandler}) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome: </label>
        <input type="text" name="name" id="name" placeholder="Digite seu nome" required value={data.name || ""} onChange={(evento) => updateFieldHandler("name", evento.target.value)}/>
      </div>

      <div className="form-control">
        <label htmlFor="email">Email: </label>
        <input type="email" email="email" id="email" placeholder="Digite seu email" required value={data.email || ""} onChange={(evento) => updateFieldHandler("email", evento.target.value)}/>
      </div>
    </div>
  )
}

export default UserForm