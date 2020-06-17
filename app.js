var request = require('request'),
  username = "suachuakhua",
  password = "suachuakhua",
  // auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
  auth='d0Y1dlZGYXk1L289'



for (let i = 0; i < 10; i++) {
  request({
    url: "http://apimanager.ktxhcm.edu.vn/api/User/GetNotifications?pageNumber=1",
    headers: {
      "content-type": "application/json",
      "Authorization": auth
    },
    method: "GET"
  }, function (error, response, body) {
    console.log('/n GetNotifications',response.statusCode )
    if (error) throw error;
    // console.log('/n GetNotifications',response )
  });

  // var data = JSON.stringify({
  //   userId: 3
  // });

  // console.log(data);
  request({
    url: "http://apimanager.ktxhcm.edu.vn/api/User/GetUserSetting",
    headers: {
      "content-type": "application/json",
      "Authorization": auth
    },
    method: "GET",
    body: `{
      "userId": 3
    }`
  }, function (error, response, body) {
    if (error) throw error;
    console.log('/n GetUserSetting',response.statusCode);
  })
  request({
    url: "http://apimanager.ktxhcm.edu.vn/api/User/GetInfoDetail",
    headers: {
      "content-type": "application/json",
      "Authorization": auth
    },
    method: "GET",
    body: `{
      "userId": 4
    }`
  }, function (error, response, body) {
    if (error) throw error;
     console.log('/n GetInfoDetail',response.statusCode);
  })
  request({
    url: "http://apimanager.ktxhcm.edu.vn/api/Student/GetAllStudents?searchKey=&pageNumber=",
    headers: {
      "content-type": "application/json",
      "Authorization": auth
    },
    method: "GET",
    body: `{
      
      "maintenanceId": 1,
      "deviceId": 1,
      "typeDetailImage": "CAB"
      
    }`
  }, function (error, response, body) {
    if (error) throw error;
    console.log('/n GetAllStudents',response.statusCode);
  })
  request({
    url: "http://apimanager.ktxhcm.edu.vn/api/User/PostReadNotification",
    headers: {
      "content-type": "application/json",
      "Authorization": auth
    },
    method: "POST",
    body: `{
      
      "Id": 4
      
    }`
  }, function (error, response, body) {
    if (error) throw error;
    console.log('/n PostReadNotification',response.statusCode);
  })
  request({
    url: "http://apimanager.ktxhcm.edu.vn/api/RepairRequest/GetDetailRepairRequest?Id=45553",
    headers: {
      "content-type": "application/json",
      "Authorization": auth
    },
    method: "GET",
    body: `{
      
        "maintenanceId": 3
      
    }`
  }, function (error, response, body) {
    if (error) throw error;
    console.log('/n RepairRequest',response.statusCode);
  })
  // request({
  //   url: "http://45.118.148.20:5004/api/Maintenance/CounterListMaintenanceByUserID",
  //   headers: {
  //     "content-type": "application/json",
  //     "Authorization": auth
  //   },
  //   method: "POST",
  //   body: `{
      
  //        "userID": 3
      
  //   }`
  // }, function (error, response, body) {
  //   if (error) throw error;
  //   console.log('/n CounterListMaintenanceByUserID',response.statusCode);
  // })
}