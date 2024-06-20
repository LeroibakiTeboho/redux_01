import { compose, pipe} from 'lodash/fp'

import React from 'react'

function FunctionComposition() {

    let input = '   JAVASCRIPT   ';
    let output = '<div>' + input.trim() + '</div>';
    console.log(`first results: ${output}`)

    const trim = str => str.trim();



    // currying

    const wrapInDiv = str => `<div>${str}</div>`    
    const wrap = type => str => `<${type}>${str}</${type}>`

    // || function Composition
    const result = wrapInDiv(trim(input));


    console.log(`second results : ${result}`);


    const toLowerCase = lw => lw.toLowerCase();

    const outcome = wrapInDiv(toLowerCase(trim(input)));
    console.log(outcome)

    //  || LODASH - A MODERN JAVASCRIPT UTILITY LIBRARY DELIVERING MODULARITY, PERFORMANCE & EXTRAS.

    const transform = pipe(trim, toLowerCase, wrap('div'));
    console.log(transform(input));




  return (
    <div>FunctionComposition</div>
  )
}

export default FunctionComposition