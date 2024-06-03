import "../styles/common.css";
import "../styles/index.css";

let departureInfo;
let arrivalInfo;
let regularFlightsInfo;
let flightsScheduleInfo;

const API_KEY = process.env.API_KEY;

async function getData() {
  // 출발정보
  const departuresApiUrl = `http://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerDeparturesOdp?serviceKey=${API_KEY}&searchday=20240702&&from_time=0000&to_time=2400&lang=K&type=json`;
  // 도착정보
  const arrivalApiUrl = `http://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerArrivalsOdp?serviceKey=${API_KEY}&from_time=0000&to_time=2400&lang=K&type=json`;

  // 정기 여객 출발정보
  const regularFlights = `http://apis.data.go.kr/B551177/PaxFltSched/getPaxFltSchedDepartures?serviceKey=${API_KEY}&lang=K&numOfRows=10000&pageNo=1&type=json`;

  //const flightsSchedule = `http://openapi.airport.co.kr/service/rest/FlightScheduleList/getIflightScheduleList?ServiceKey=${API_KEY}&schDeptCityCode=ICN&pageNo=1`;

  const responses = await Promise.all([
    fetch(departuresApiUrl),
    //fetch(arrivalApiUrl),
    fetch(regularFlights),
    //fetch(flightsSchedule),
  ]);

  departureInfo = await responses[0].json();
  //arrivalInfo = await responses[1].json();
  regularFlightsInfo = await responses[1].json();
  //flightsScheduleInfo = await responses[2].json();

  console.log("인천출발", departureInfo.response.body.items);
  console.log("인천정기", regularFlightsInfo.response.body.items);
  //console.log("인천스케쥴", flightsScheduleInfo.response.body.items);

  //console.log("인천도착", arrivalInfo.response.body.items);
}

try {
  getData();
} catch (error) {
  console.log("에러", error);
}

let ticket = document.getElementById("ticket");
let flightIdInput = document.getElementById("input_flightId");
let airlineName = document.getElementsByClassName("ticket_title");
let departureAirport = document.getElementById("departure_airport_code");
let arrivalAirport = document.getElementById("arrival_airport_code");
let finalAirport = document.getElementById("final_airport");
let flightId = document.getElementById("flight_id");
let gateNumber = document.getElementById("gate_number");
// let cityCode = document.getElementById("city_code");
let remark = document.getElementById("remark");
let terminalId = document.getElementById("terminal_id");
let estimatedDateTime = document.getElementById("estimated_datetime");
let checkinCounter = document.getElementById("checkin_counter");
let elapseTime = document.getElementById("elapse_time");
let estimatedArrivalTime = document.getElementById("estimated_arrival_time");
// let rotateBtn = document.getElementById("rotate_button");
// 추가 문자열
let insertString = ":";

flightIdInput.addEventListener("change", function (e) {
  try {
    let departureData = departureInfo.response.body.items;
    let regularDepartureFlightsData = regularFlightsInfo.response.body.items;
    for (let j = 0; j < regularDepartureFlightsData.length; j++) {
      if (e.target.value === regularDepartureFlightsData[j].flightid) {
        console.log(regularDepartureFlightsData[j]);
      }
    }

    for (let i = 0; i < departureData.length; i++) {
      if (e.target.value === departureData[i].flightId) {
        // 항공사
        airlineName[0].textContent = departureData[i].airline;
        airlineName[1].textContent = departureData[i].airline;
        // 최종 목적지 공항명(한글)
        finalAirport.textContent = departureData[i].airport;
        // 출발 공항 코드 : 인천
        departureAirport.textContent = "ICN";
        // 도착 공항 코드
        arrivalAirport.textContent = departureData[i].airportCode;
        flightId.textContent = departureData[i].flightId;
        gateNumber.textContent = departureData[i].gatenumber;
        // if (
        //   departureData[i].cityCode === null ||
        //   departureData[i].cityCode === ""
        // ) {
        //   cityCode.textContent = "도시 코드 미제공";
        // } else {
        //   cityCode.textContent = departureData[i].cityCode;
        // }
        if (departureData[i].remark === null) {
          remark.textContent = `운항 예정`;
        } else {
          remark.textContent = departureData[i].remark;
        }

        if (departureData[i].terminalId === "P01") {
          terminalId.textContent = "제1 터미널";
        } else if (departureData[i].terminalId === "P02") {
          terminalId.textContent = "탑승동";
        } else if (departureData[i].terminalId === "P03") {
          terminalId.textContent = "제2 터미널";
        }
        // 변경 출발 시간
        let newEstimatedDateTime =
          departureData[i].estimatedDateTime.slice(0, 2) +
          insertString +
          departureData[i].estimatedDateTime.slice(2);

        estimatedDateTime.textContent = newEstimatedDateTime;

        // 체크인 카운터
        checkinCounter.textContent = departureData[i].chkinrange;
        if (departureData[i].elapsetime === null) {
          elapseTime.textContent = `비행 소요 시간 정보 미제공`;
        } else {
          let newElapseTime =
            departureData[i].elapsetime.slice(0, 2) +
            insertString +
            departureData[i].elapsetime.slice(2);

          elapseTime.textContent = newElapseTime;

          let arrivalTime = `0${
            Number(departureData[i].estimatedDateTime) +
            Number(departureData[i].elapsetime)
          }`;

          let newEstimatedArrivalTime =
            arrivalTime.slice(0, 2) + insertString + arrivalTime.slice(2);

          estimatedArrivalTime.textContent = newEstimatedArrivalTime;
        }
      }
    }
  } catch (error) {
    console.log(error);
    //console.log("해당 편명은 없습니다");
  }
});

// rotateBtn.addEventListener("click", function (e) {
//   if (
//     ticket.style.transform === "" ||
//     ticket.style.transform === "rotateY(360deg)"
//   ) {
//     console.log(ticket.style.transform);
//     ticket.style.transform = "rotateY(180deg)";
//   } else if (ticket.style.transform === "rotateY(180deg)") {
//     console.log(ticket.style.transform);
//     ticket.style.transform = "rotateY(360deg)";
//   }
// });
