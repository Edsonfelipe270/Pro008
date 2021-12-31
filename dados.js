const objs = [
    {
 "nome":"Edson",
 "idade": 21,
 "profissao":"Programador",
 "passatempos": ["jogos","filmes"] 
    },
    {
 "nome":"lucas",
 "idade": 24,
 "profissao":"jogador",
 "passatempos": ["jogos","filmes"]
    },
    {
     "nome":"luiza",
 "idade": 29,
 "profissao":"medica",
 "passatempos": ["jogos","filmes"]
    }]
 //convertendo o objeto para json
    const JsonData = JSON.stringify(objs)
    console.log(JsonData)
    console.log(typeof JsonData)

  //convertendo  o json para objeto
  const objData = JSON.parse(JsonData)
  console.log(objData)  
 
 