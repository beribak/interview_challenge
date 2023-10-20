
fetch('https://www.lewagon.com/graduates?category=engineers', {
  method: 'GET',

  })
.then(response => response.json())
.then(data => { 
  console.log(data)
})

// mode: 'no-cors'
// // @import 'toggle.js'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ApexCharts from 'apexcharts'
// import './styles.css';

// const body = document.querySelector('body');

// fetch('https://gitlab.com/-/snippets/2149167/raw/main/data.json')
// .then(response => response.json())
// .then(data => { 
//   data.profiles.forEach(item => {
//     let values = []
//     let labels = []

//     let html = `<div class="border border-dark w-25 p-2 mb-2">
//                   <div class="d-flex justify-content-between">
//                     <p>${item.title}</p> 
//                     <p class="btn btn-primary" id="btn${data.profiles.indexOf(item)}">Clone</p>
//                   </div> 
//                   <div id="chart${data.profiles.indexOf(item)}">
//                   </div>
//                 </div>`
//     let htmlClone = `<div class="border border-dark w-25 p-2 mb-2">
//                     <div class="d-flex justify-content-between">
//                       <p>${item.title}</p> 
//                     </div> 
//                     <div id="chart${data.profiles.indexOf(item) + 3}">
//                     </div>
//                   </div>` 
                  
//     body.insertAdjacentHTML('beforeend', html)
                  
//     let btn = document.querySelector(`#btn${data.profiles.indexOf(item)}`) 
//     console.log(btn)
//     btn.addEventListener('click', () => {
//       body.insertAdjacentHTML('beforeend', htmlClone)
//       let clone = document.querySelector(`#chart${data.profiles.indexOf(item) + 3}`)
//       var chart = new ApexCharts(clone, options);
//       chart.render();
//       btn.remove()
//     })


//     item.data.forEach(item => {
//       values.push(item.value)
//     })

//     item.data.forEach(item => {
//       labels.push(item.label)
//     })

//     var options = {
//       series: values,
//       chart: {
//         type: 'donut',
//       },
//       labels: labels,
//     }
    
//     var chart = new ApexCharts(document.querySelector(`#chart${data.profiles.indexOf(item)}`), options);
//     chart.render();
//   })
// })
