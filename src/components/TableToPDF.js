import React, { Fragment } from 'react';
import Header from './Header';
import jsPDF from "jspdf";
import "jspdf-autotable";

    const people = [
        {number: 44, name: 'Lewis Hamilton', team: 'Mercedes', country: 'United Kingdom', dob: '07/01/1985', placeOfBirth: 'Stevenage, England'},
        {number: 77, name: 'Valtteri Bottas', team: 'Mercedes', country: 'Finland', dob: '28/08/1989', placeOfBirth: 'Nastola, Finland'},
        {number: 5,name: 'Sebastian Vettel',team: 'Ferrari',country: 'Germany',dob: '03/07/1987',placeOfBirth: 'Heppenheim, Germany'},
        {number: 16,name: 'Charles Leclerc',team: 'Ferrari',country: 'Monaco',dob: '16/10/1997',placeOfBirth: 'Monte Carlo, Monaco'},
        {number: 33,name: 'Max Verstappen',team: 'Red Bull Racing',country: 'Netherlands',dob: '30/09/1997',placeOfBirth: 'Hasselt, Belgium'},
        {number: 23,name: 'Alex Albon',team: 'Red Bull Racing',country: 'Thailand',dob: '23/03/1996',placeOfBirth: 'London, England'},
        {number: 4,name: 'Lando Norris',team: 'McLaren',country: 'United Kingdom',dob: '13/11/1999',placeOfBirth: 'Bristol, England'},
        {number: 3,name: 'Daniel Ricciardo',team: 'Renault',country: 'Australia',dob: '01/07/1989',placeOfBirth: 'Perth, Australia'},
        {number: 31,name: 'Esteban Ocon',team: 'Renault',country: 'France',dob: '17/09/1996',placeOfBirth: 'Évreux, Normandy'},
        {number: 10,name: 'Pierre Gasly',team: 'AlphaTauri',country: 'France',dob: '07/02/1996',placeOfBirth: 'Rouen, France'},
        {number: 26,name: 'Daniil Kvyat',team: 'AlphaTauri',country: 'Russian Federation',dob: '26/04/1994',placeOfBirth: 'Ufa, Russia'},
        {number: 11,name: 'Sergio Perez',team: 'Racing Point',country: 'Mexico',dob: '26/01/1990',placeOfBirth: 'Guadalajara, Mexico'},
        {number: 18,name: 'Lance Stroll',team: 'Racing Point',country: 'Canada',dob: '29/10/1998',placeOfBirth: 'Montreal, Canada'},
        {number: 7,name: 'Kimi Räikkönen',team: 'Alfa Romeo',country: 'Finland',dob: '17/10/1979',placeOfBirth: 'Espoo, Finland'},
        {number: 99,name: 'Antonio Giovinazzi',team: 'Alfa Romeo',country: 'Italy',dob: '14/12/1993',placeOfBirth: 'Martina Franca, Italy'},
        {number: 20,name: 'Kevin Magnussen',team: 'Haas',country: 'Denmark',dob: '05/10/1992',placeOfBirth: 'Roskilde, Denmark'},
        {number: 8,name: 'Romain Grosjean',team: 'Haas',country: 'France',dob: '17/04/1986',placeOfBirth: 'Geneva, Switzerland'},
        {number: 63,name: 'George Russell',team: 'Williams',country: 'United Kingdom',dob: '15/02/1998',placeOfBirth: 'King\'s Lynn, England'},
        {number: 6,name: 'Nicholas Latifi',team: 'Williams',country: 'Canada',dob: '29/06/1995',placeOfBirth: 'Montreal, Canada'},
        {number: 31,name: 'Esteban Ocon',team: 'Renault',country: 'France',dob: '17/09/1996',placeOfBirth: 'Évreux, Normandy'},
        {number: 10,name: 'Pierre Gasly',team: 'AlphaTauri',country: 'France',dob: '07/02/1996',placeOfBirth: 'Rouen, France'},
        {number: 26,name: 'Daniil Kvyat',team: 'AlphaTauri',country: 'Russian Federation',dob: '26/04/1994',placeOfBirth: 'Ufa, Russia'},
        {number: 11,name: 'Sergio Perez',team: 'Racing Point',country: 'Mexico',dob: '26/01/1990',placeOfBirth: 'Guadalajara, Mexico'},
        {number: 18,name: 'Lance Stroll',team: 'Racing Point',country: 'Canada',dob: '29/10/1998',placeOfBirth: 'Montreal, Canada'},
        {number: 7,name: 'Kimi Räikkönen',team: 'Alfa Romeo',country: 'Finland',dob: '17/10/1979',placeOfBirth: 'Espoo, Finland'},
        {number: 99,name: 'Antonio Giovinazzi',team: 'Alfa Romeo',country: 'Italy',dob: '14/12/1993',placeOfBirth: 'Martina Franca, Italy'},
        {number: 20,name: 'Kevin Magnussen',team: 'Haas',country: 'Denmark',dob: '05/10/1992',placeOfBirth: 'Roskilde, Denmark'},
        {number: 8,name: 'Romain Grosjean',team: 'Haas',country: 'France',dob: '17/04/1986',placeOfBirth: 'Geneva, Switzerland'},
        {number: 63,name: 'George Russell',team: 'Williams',country: 'United Kingdom',dob: '15/02/1998',placeOfBirth: 'King\'s Lynn, England'},
        {number: 6,name: 'Nicholas Latifi',team: 'Williams',country: 'Canada',dob: '29/06/1995',placeOfBirth: 'Montreal, Canada'} 
      ]

  const TableToPDF = () => {

    function exportPDF(){
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 125;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Lista";


    const headers = [["NUMBER", "NAME", "TEAM", "COUNTRY", "DATE OF BIRTHDAY", "PLACE OF BIRTH"]];

    const data = people.map(elt=> [elt.number, elt.name, elt.team, elt.country, elt.dob, elt.placeOfBirth]);

    let content = {
      startY: 135,
      head: headers,
      body: data
    };


    const imgData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAADqCAMAAABA8YNeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAJAUExURUBSbOfo6W3M17u9v+jp6iyjm/SAdUK7yz9Ra7e5u/jUPOnp6eXn5z1Pam7L1ufn6PbWdj1NZODh47q8vj5Qa+rr6yqimm17jry+wOTl5s7P0b2/wZafq/R/dN/g4cXHyMPFx9PU1YWQnm7O2dXX2HaClNvc3eHi5JGaqNzd3++uqNjZ28rMzcvNzklbdEJXcX7CtzKlnri9xd7f4EBSbILMz8fJyuLj5F+ltc/R08LExUNjej1hdUBSbPSHfDqooXm+vGrF0W3M12fBzT5Yb4mTot3l5XPL1pXIyUBSbFlneWe4sz9QaUBSbIHL1mvI1HTJ002vqEOrpFizrW3M1z6sum3M16HOy099kW3M19Ph4W3M10BSbIvFwq3T0sbc3JrT2+nj3W3M1z1NZG3M10lrgtjj423M11WNn23L12/L1m3M16+zuW3M17/a2kBSbOXPjbbX183f323M10t0iOrR0G3M123M12a5x2OxwO7hrPbWSTCZllG+y1ubrD9RbG7M10BSbG3M12pqfbu9vy+jnUBSbOzHxPGUjOvkxz+vryyjm6assiyjm+PKSPbWdvbWdvbWdvCmn/HdhvTZYSyhmri+wCyjmyyjmyyjm3+IlSyjm/bWdnbI07aenjOLjPbWdvbWdiyjmyyjm/bWdru9vyyjm/bWduiBebu9v/bWdu61sO29uUBSbLu9v7m+wFeSpKPJh/bWdri+wE56jkVielmnsl6js3e6p+HVhqfCxOiAd5jEykDo17vpm0dwTLOICY4AAADAdFJOU////////////////////////////////////////////////////////////////wX////zD////////xQ9/////+z/C///Mf9I//9i0v//Gv///+D/0///9P/D6///////JPm1//9A/2Smjf9L/64k//+A//9X+f////8m////c7qa/3I6c//////o/7P/n+34////iInUbFb/9N3///9MfuDIXsyau//hO///mEakqP/PtXzc0un///v/2f//ABWVTTgAABd9SURBVHja7Jz/TxNpHsenTycwhYE2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";
    const imgWidth = 75;
    const imgHeight = 70;
    const margin = 52;
    const marginL = 40;
    //const pageWidth = doc.internal.pageSize.getWidth();
    
    doc.addImage(
      imgData,
      "PNG",
      //pageWidth / 2 - imgWidth / 2,
      marginL,
      margin,
      imgWidth,
      imgHeight
    );

    const barImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgsAAAARCAIAAADc73hNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABQSURBVHhe7cdBCcBAAASx8y/j1FVGC/sbKiGQT865DwD86AFgegCYHgCmB4DpAWB6AJgeAKYHgOkBYHoAmB4ApgeA6QFgegCYHgCmB4DPfV4ASnbqsJddMgAAAABJRU5ErkJggg==";

    doc.addImage(barImage,"PNG", 40, 45, 513, 2);


    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    doc.setTextColor(0, 0, 128);
    doc.text(title, marginLeft, 65);
    doc.addImage(barImage,"PNG",125,70,428,2);
    doc.setTextColor(0, 128, 128);
    doc.setFontSize(12);
    doc.text("       Report", marginLeft, 90);
    doc.text("       Name", marginLeft, 105);
    doc.text("       Fecha: " + day + "/" + month + "/" + year, marginLeft, 120);

    doc.autoTable(content);
    doc.save("report.pdf")

    }
    return (
        <Fragment>
            <Header title="Download PDF" />
            <div>
                <section classname ="container">
                    <div className="row">
                    <div className="col-sm-12 text-center justify-content-center align-self-center">
                        <div>
                        <button className = 'btn-primary' onClick={() => exportPDF()}>  
                           <i className='medium material-icons'>file_download</i>
                           Descargar
                        </button>
                        </div>
                    </div>
                    </div>
                </section>
               
            </div>
        </Fragment>
    );
}

export default TableToPDF;