import React, { Component } from "react";
import { DatePicker, RangePicker, theme } from "react-trip-date";
import styled, { ThemeProvider } from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import { parseDate } from "../../model";

const handleResponsive = (setNumberOfMonth: any) => {
  let width = document.querySelector(".tp-calendar")!.clientWidth;
  if (width > 900) {
    setNumberOfMonth(3);
  } else if (width < 900 && width > 580) {
    setNumberOfMonth(2);
  } else if (width < 580) {
    setNumberOfMonth(1);
  }
};

const Day = ({day}: {day: any}) => {
  return (
    <>
      <p className="date">{day.format("DD")}</p>
      {/* <p  className="date">7</p> */}
    </>
  );
};

export const TitleDaysOfWeekStyle = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: row-reverse;
  border-bottom: 1px solid #e2e2e2;
  margin: 30px 0 15px 0;
  font-size: 12px;

  p {
    width: 40px;
    margin-bottom: 15px;
  }
`;

const Title: React.FunctionComponent<{ source: any }> = ({ source }) => {
	let titleDay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
	// you can just change titles, not day start of the week
	return (
	  <TitleDaysOfWeekStyle>
		{titleDay.map(item => (
		  <p key={Math.random()}>{item}</p>
		))}
	  </TitleDaysOfWeekStyle>
	);
  };

export class TripPlanner extends React.Component<RouteComponentProps> {
  onChange = (date: any) => console.log(date);

  render() {
    return (
      <ThemeProvider theme={theme}>
        <RangePicker
          handleChange={this.onChange}
          selectedDays={['2020-02-26','2020-02-28']} //initial selected days
          jalali={false}
          numberOfMonths={1}
          numberOfSelectableDays={3} // number of days you need
          disabledDays={["2019-12-02"]} //disabeld days
          responsive={handleResponsive} // custom responsive, when using it, `numberOfMonths` props not working
          disabledBeforToday={true}
          disabled={false} // disable calendar
          dayComponent={Day} //custom day component
		  titleComponent={Title} // custom title of days
		  hoverable={true}
        />
      </ThemeProvider>
    );
  }
}
