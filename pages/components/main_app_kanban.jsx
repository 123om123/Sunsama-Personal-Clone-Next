import React from "react";
import { Card, CardContent, Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let today = days[date.getDay()];
let thisMonth = months[date.getMonth()];
let thisDate = date.getDate();

function MainAppKanban() {
  return (
    <div
      style={{
        padding: "12px 20px 0px",
        width: "272px",
      }}>
      <Card
        style={{
          width: "272px",
          backgroundColor: "#141415",
        }}
        className="kanban_day_container">
        <CardContent style={{ padding: "0px" }}>
          <div className="kanban_day_label_container">
            <div>
              <span
                style={{ fontSize: "24px", fontWeight: "600" }}
                className="kanban_day_date_dotw">
                {today}
              </span>
            </div>
            <span
              style={{ fontSize: "14px", fontWeight: "500", color: "#a0a0a0" }}
              className="kanban_day_date_dotm">{`${thisMonth} ${thisDate}`}</span>
          </div>
          <div
            style={{
              backgroundColor: "#1f1f1e",
              width: "232px",
              height: "8px",
              margin: "13px 0px",
              borderRadius: "5px",
            }}
            className="task_progress">
            <div
              style={{
                backgroundColor: "#4dcd7d",
                height: "8px",
                width: "35.7%",
                borderRadius: "5px",
              }}
              className="task_progress_bar"></div>
          </div>
        </CardContent>
      </Card>
      <Card
        style={{
          height: "32px",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#232325",
        }}>
        <CardContent
          style={{
            padding: "0px",
            backgroundColor: "#232325",
          }}>
          <Button
            style={{
              display: "flex",
              height: "32px",
              textTransform: "none",
              width: "232px",
              paddingRight: "130px",
            }}>
            <AddCircleOutlineIcon
              style={{
                fontSize: "20px",
                fontWeight: "lighter",
                marginRight: "5px",
                fill: "#9d9d9d",
              }}></AddCircleOutlineIcon>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                margin: "0px",
                padding: "0px",
                color: "#9d9d9d",
              }}>
              Add a task
            </p>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default MainAppKanban;