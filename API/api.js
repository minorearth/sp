import { store } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";


export const setTaskCompleted = (classid, username, taskid) => {

    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMTg5Mjc4YjdkOWUxMTk2YTY0NmYwNzJmM2NmMzlkNTU3MWNmZmM0MzYwYWM2ZDgyNGQ2NTMwOTUwZjhiYThlOThhOGZiZTIzZjFlNWUyMTIiLCJpYXQiOjE2ODA0Njk4NzAuMTg0NzI0LCJuYmYiOjE2ODA0Njk4NzAuMTg0NzMyLCJleHAiOjE3MTIwOTIyNzAuMTc3NDMzLCJzdWIiOiIzMCIsInNjb3BlcyI6W119.OvVhDUuN8lg8FomPrWlqEg96pTk-1adnioJuCFDJ9fvd3PVgvRmARpmW0ccEs5R_JTlM3-PC5FbSDK5YHSD_o4QbGtoOS06hId2rvh99ANAlnQV1bBSuuFRoItfsCKQ7VTc9bYYcl7zrG2GfmV7VbdFJhlNyt-sjFZYi4qVPEVeyNTkydPoioUsk0_-2kyPnIHxv9347ya4tVH7B3xGKUrZy9VHv9RyAdWGTFzONSu7c7qA97YAovP57XawkOIZPmhq9n7u3nGXLf3E-in8MS-CH9BpzKivRfLUiWHklWR7aLQBozgAKaIeNRHmQzx4deNv3oJL3oIMpYUBormlQEfyVbS5b7asDiEMdmkGOc4CW6B9VigTr-ZklvQn7H_zNgWVFMEupDmlwQ-J6IM8a2s7mLQZxMRD3LILPBbZAcIpINyALRdoqHzNz2nVShayrVvK8My-XWI2urJ-AWIIcwMuI5hVg-wzMm207CUmFnPatGPUHN9NxcO42yCU72ziGyl6A7IGCI7fnbpe8h-trdd37aneK39XlGXUNcVGDjGkXm5QnGU_TQlbiiZuIVjU99qBNqtGOeFI77oZh3_S1B9VYtcJgnFt8RKFQRz92X-940t5GZbC9iTYdwuQQ4j-AWQgo8LLsfT1XFELmwEgUjv-U7IrShI56agWjElOkalI");
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //   "id": 1,
    //   "firstname": "Петр2",
    //   "lastname": "Петров",
    //   "middlename": "Петрович",
    //   "bith": "01.01.1980",
    //   "pol": "Мужской",
    //   "image": "1"
    // });

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };

    // fetch("https://medic.madskill.ru/api/createProfile", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
}

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
        .then(response => response.text())
        .then(result => result)
        .catch(error => console.log('error', error));
    return res
}