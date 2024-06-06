import "../styles/common.css";
import "../styles/index.css";
import "../styles/clock.css";
import "external-svg-loader";
import "../images/blue_sky.jpg";

let departureInfo;
let arrivalInfo;
let regularFlightsInfo;
let flightsScheduleInfo;

const API_KEY = process.env.API_KEY;

//let myTicketList = [];

let departureData;

setInterval(() => {
  let today = new Date();
  let hour = today.getHours(); // 시
  let min = today.getMinutes(); //분
  let sec = today.getSeconds(); //초

  let timeBoard = document.querySelectorAll(".timenow"); // 값이 입력될 공간
  timeBoard.forEach((item) => {
    let time = hour + "시 " + min + "분 " + sec + "초"; // 형식 지정
    item.textContent = time; // 출력
  });
}, 1000);

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
    //fetch(regularFlights),
    //fetch(flightsSchedule),
  ]);

  departureInfo = await responses[0].json();
  //arrivalInfo = await responses[1].json();
  //regularFlightsInfo = await responses[1].json();
  //flightsScheduleInfo = await responses[2].json();

  console.log("인천출발", departureInfo.response.body.items);
  //console.log("인천스케쥴", flightsScheduleInfo.response.body.items);

  departureData = departureInfo.response.body.items;
  await departureScreen();
}

try {
  getData();
} catch (error) {
  console.log("에러", error);
}

let ticket = document.getElementById("ticket");
let flightIdInput = document.getElementById("input_flightId");
let airlineName = document.getElementsByClassName("ticket_title");
let textBackground = document.querySelectorAll(".content_background");
let departureAirport = document.getElementById("departure_airport_code");
let arrivalAirport = document.getElementById("arrival_airport_code");
let finalAirport = document.getElementById("final_airport");
let flightId = document.getElementById("flight_id");
let gateNumber = document.querySelector("#gate_number p");
// let cityCode = document.getElementById("city_code");
let remark = document.getElementById("remark");
let terminalId = document.querySelector("#terminal_id p");
let estimatedDateTime = document.getElementById("estimated_datetime");
let checkinCounter = document.getElementById("checkin_counter");
let elapseTime = document.getElementById("elapse_time");
let estimatedArrivalTime = document.getElementById("estimated_arrival_time");
// let rotateBtn = document.getElementById("rotate_button");

// 추가 문자열
let insertString = ":";

flightIdInput.addEventListener("change", function (e) {
  try {
    for (let i = 0; i < departureData.length; i++) {
      if (e.target.value === departureData[i].flightId) {
        // 항공사
        airlineName[0].textContent = departureData[i].airline;
        airlineName[1].textContent = departureData[i].airline;

        textBackground[0].textContent = departureData[i].airline;
        textBackground[1].textContent = departureData[i].airline;

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
    //console.log(error);
    console.log("해당 편명은 없습니다");
  }
});

// 스크린 추가
let screen = document.querySelector(".screen");
async function departureScreen() {
  const itemsToDisplay = 10;
  for (let i = 0; i < Math.min(itemsToDisplay, departureData.length); i++) {
    // 출발 현황 리스트 생성
    let departureList = document.createElement("div");
    let departureAirlineName = document.createElement("p");
    let departureTerminalId = document.createElement("p");
    let departureFlightId = document.createElement("p");
    let departureRemark = document.createElement("p");
    let departureGateNum = document.createElement("p");
    let departureEstimatedTime = document.createElement("p");
    let departureScheduleTime = document.createElement("p");
    let departureAirport = document.createElement("p");
    let departureCheckin = document.createElement("p");

    screen.appendChild(departureList);
    // 예정 출발 시간
    departureList.appendChild(departureScheduleTime);
    // 변경 출발 시간
    departureList.appendChild(departureEstimatedTime);
    // 도착 공항
    departureList.appendChild(departureAirport);
    // 항공사
    departureList.appendChild(departureAirlineName);
    // 출발 편명
    departureList.appendChild(departureFlightId);
    // 터미널이름
    departureList.appendChild(departureTerminalId);
    // 체크인 카운터
    departureList.appendChild(departureCheckin);
    // 게이트
    departureList.appendChild(departureGateNum);
    // 출발 현황
    departureList.appendChild(departureRemark);

    // 터미널 이름 변경
    if (departureData[i].terminalId === "P01") {
      departureTerminalId.textContent = "제1 터미널";
    } else if (departureData[i].terminalId === "P02") {
      departureTerminalId.textContent = "탑승동";
    } else if (departureData[i].terminalId === "P03") {
      departureTerminalId.textContent = "제2 터미널";
    }

    departureList.classList.add("departure_list");
    departureScheduleTime.classList.add("departure_schedule");
    departureEstimatedTime.classList.add("departure_estimated");
    departureAirport.classList.add("departure_airport");
    departureAirlineName.classList.add("departure_airline");
    departureFlightId.classList.add("departure_flightId");
    departureTerminalId.classList.add("departure_terminal");
    departureCheckin.classList.add("departure_checkin");
    departureGateNum.classList.add("departure_gate");
    departureRemark.classList.add("departure_remark");

    // 출발 변경 시간
    let newEstimatedDateTime =
      departureData[i].estimatedDateTime.slice(0, 2) +
      insertString +
      departureData[i].estimatedDateTime.slice(2);

    // 출발 예정 시간
    let newScheduleDateTime =
      departureData[i].scheduleDateTime.slice(0, 2) +
      insertString +
      departureData[i].scheduleDateTime.slice(2);

    departureEstimatedTime.textContent = newEstimatedDateTime;
    departureScheduleTime.textContent = newScheduleDateTime;

    departureAirport.textContent = departureData[i].airport;
    departureAirlineName.textContent = departureData[i].airline;
    departureFlightId.textContent = departureData[i].flightId;

    departureCheckin.textContent = departureData[i].chkinrange;
    departureGateNum.textContent = departureData[i].gatenumber;
    departureRemark.textContent = departureData[i].remark;
  }
}

// 현재 시간 체크
function getTimeSegmentElements(segmentElement) {
  const segmentDisplay = segmentElement.querySelector(".segment_display");
  const segmentDisplayTop = segmentDisplay.querySelector(
    ".segment_display_top"
  );
  const segmentDisplayBottom = segmentDisplay.querySelector(
    ".segment_display_bottom"
  );

  const segmentOverlay = segmentDisplay.querySelector(".segment_overlay");
  const segmentOverlayTop = segmentOverlay.querySelector(
    ".segment_overlay_top"
  );
  const segmentOverlayBottom = segmentOverlay.querySelector(
    ".segment_overlay_bottom"
  );

  return {
    segmentDisplayTop,
    segmentDisplayBottom,
    segmentOverlay,
    segmentOverlayTop,
    segmentOverlayBottom,
  };
}

function updateSegmentValues(displayElement, overlayElement, value) {
  displayElement.textContent = value;
  overlayElement.textContent = value;
}

function updateTimeSegment(segmentElement, timeValue) {
  const segmentElements = getTimeSegmentElements(segmentElement);

  if (
    parseInt(segmentElements.segmentDisplayTop.textContent, 10) === timeValue
  ) {
    return;
  }

  segmentElements.segmentOverlay.classList.add("flip");

  updateSegmentValues(
    segmentElements.segmentDisplayTop,
    segmentElements.segmentOverlayBottom,
    timeValue
  );

  function finishAnimation() {
    segmentElements.segmentOverlay.classList.remove("flip");
    updateSegmentValues(
      segmentElements.segmentDisplayBottom,
      segmentElements.segmentOverlayTop,
      timeValue
    );

    this.removeEventListener("animationend", finishAnimation);
  }

  segmentElements.segmentOverlay.addEventListener(
    "animationend",
    finishAnimation
  );
}

function updateTimeSection(sectionID, timeValue) {
  if (sectionID === "year") {
    const firstDigit = Math.floor(timeValue.toString().substring(0, 2));
    const secondDigit = Math.floor(timeValue.toString().substring(2, 4));
    const timeSegments = document
      .getElementById(sectionID)
      .querySelectorAll(".time_segment");

    updateTimeSegment(timeSegments[0], firstDigit);
    updateTimeSegment(timeSegments[1], secondDigit);
    return;
  }

  const firstNumber = Math.floor(timeValue / 10) || 0;
  const secondNumber = timeValue % 10 || 0;
  const sectionElement = document.getElementById(sectionID);
  const timeSegments = sectionElement.querySelectorAll(".time_segment");

  updateTimeSegment(timeSegments[0], firstNumber);
  updateTimeSegment(timeSegments[1], secondNumber);
}

function getCurrentTime() {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    days: now.getDate(),

    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
}

function updateAllSegments() {
  const currentTime = getCurrentTime();

  updateTimeSection("year", currentTime.year);
  updateTimeSection("month", currentTime.month);
  updateTimeSection("days", currentTime.days);

  updateTimeSection("hours", currentTime.hours);
  updateTimeSection("minutes", currentTime.minutes);
  updateTimeSection("seconds", currentTime.seconds);
}

setInterval(updateAllSegments, 1000);
updateAllSegments();
