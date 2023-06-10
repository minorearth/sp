export const getTaskCompletedUserList = async (classid, taskid) => {
    var myHeaders = new Headers();
    myHeaders.append("X-Hasura-Role", "anonymous");
    myHeaders.append("content-type", "application/json");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    const res = await fetch(`https://inform250.school1298.ru/api/rest/gettaskexecutors?classid=${encodeURIComponent(classid)}&taskid=${encodeURIComponent(taskid)}`, requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => 'Что-то пошло не так');
    return res
}


export const getEvents = async () => {
    const res = await fetch("https://school1298.ru/cl/teachers/calendar.json",
        {
            method: 'GET',
            headers: { 'Content-Type': 'text/plain' }
        })
        .then(res => res.json())
        .then(result => result)
    return res
}


export const checkPin = async (pin) => {
    var myHeaders = new Headers();
    myHeaders.append("X-Hasura-Role", "anonymous");
    myHeaders.append("content-type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const response = await fetch(`https://inform250.school1298.ru/api/rest/checkpin?pin=${encodeURIComponent(pin)}`, requestOptions).then(
      response => response.json())
    return response
  }
  

  export const InsertTask = (Id, UserName, className) => {
    var myHeaders = new Headers();
    myHeaders.append("X-Hasura-Role", "anonymous");
    myHeaders.append("content-type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch(`https://inform250.school1298.ru/api/rest/new?classid=${className}&username=${UserName}&taskid=${Id}`, requestOptions)
    // import { useGetPokemonByNameQuery } from '../../redux/zu'
    // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    // console.log(data)



}






