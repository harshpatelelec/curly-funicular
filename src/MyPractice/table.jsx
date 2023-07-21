import React from 'react'
import JsonData from './data.json'
import './App.css'
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
         
			return(
				<tr>
					<td>{info.Id}</td>
					<td>{info.Year}</td>
					<td>{info.Medals}</td>
				</tr>
			)
		}
	)

	return(
		<div>
         <div>  <h1>Harsh Patel</h1> </div> <br></br>
         <div>  <h1>8377989320</h1> </div> <br></br>
		 <div>  <h1>harshpatelelec@gmail.com</h1> </div> 
         <br></br>
         <br></br>
         <br></br>

			<table class="table table-striped">
				<thead>
					<tr>
					<th>Id</th>
					<th>Year</th>
					<th>Medals</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
