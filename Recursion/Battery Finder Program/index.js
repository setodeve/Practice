
// ここから書いてください。

const elements = {
  target : document.getElementById("target"),
  steps : document.getElementById("steps"),
  lists : document.getElementById("lists"),
}

//初期化
initialView() ;

const battery =
    [{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },
    {
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,
        "maxDraw": 9.2,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }]
;

const camera =
    [{
        "brand": "Cakon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Cakon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Cakon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }]
;

//console.log(battery);
//console.log(camera);
class Camera{

  //SelectFormの初期値を設定する
  static setBrand(){
    const tmp1 = document.getElementById("step1-form");
    const tmp2 = document.getElementById("step2-form");
    const tmp1_query = document.querySelector("#step1-form");
    const tmp2_query = document.querySelector("#step2-form");
    const tmp3_query = document.querySelector("#step3-form");

    //初期化
    for(let i=0; i<camera.length;i++){
      if(!tmp1.innerHTML.includes(camera[i].brand)){
        tmp1.innerHTML +=`<option value="${camera[i].brand}">${camera[i].brand}</option>` ;
      }

      if(camera[i].brand == tmp1_query[tmp1.selectedIndex].innerHTML){
        tmp2.innerHTML += `<option id="${camera[i].model}" powerConsumptionWh="${camera[i].powerConsumptionWh}">${camera[i].model}</option>` ;
      }
    }

    //Step1イベントリスナー
    tmp1_query.addEventListener("change", function(){
        tmp2.innerHTML = `` ;
        const tmpevent = document.querySelectorAll("#step1-form option") ;
        for(let i=0; i<camera.length;i++){
          if(camera[i].brand == tmpevent[this.selectedIndex].innerHTML){
            tmp2.innerHTML += `<option id="${camera[i].model}" powerConsumptionWh=${camera[i].powerConsumptionWh}>${camera[i].model}</option>` ;
          }
        }
        let step3 = tmp3_query.value;
        let step2 = [];
        step2.push(tmp2.selectedIndex) ;
        Battery.batteryArr(step2,step3) ;
    });

    //Step2イベントリスナー
    tmp2_query.addEventListener("change", function(){
      const tmpevent = document.querySelectorAll("#step1-form option") ;

      let step3 = tmp3_query.value;
      let step2 = [];
      step2.push(tmp2.selectedIndex) ;
      Battery.batteryArr(step2,step3) ;
    });

    //Step3イベントリスナー
    tmp3_query.addEventListener("change", function(){

      let step3 = tmp3_query.value ;
      let step2 = [];
      step2.push(tmp2.selectedIndex) ;

      Battery.batteryArr(step2,step3) ;
    });
  }

}

class Battery{
  //Step4 リスト作成
  static batteryArr(step2,step3){
   let wh = 0 ;
   let h = 0 ;
   let w = 0 ;
   let arr = {} ;
   let attribute = document.querySelectorAll("#step2-form") ;

    for(let i=0; i<battery.length ;i++){
        //電力容量
        wh = (battery[i].voltage * battery[i].capacityAh) ;
        //時間
        let maxconsumption = parseInt(attribute[0][step2].getAttribute("powerConsumptionWh"))+ parseInt(step3) ;
        h = (wh/maxconsumption).toFixed(2) ;
        //最大放電電力
        w = battery[i].maxDraw * battery[i].endVoltage ;
        if( maxconsumption < w ) arr[battery[i].batteryName] = h ;
    }

    View.makeLists(arr);
  }

}

class View{
  //Step4 リストHTML作成
  static makeLists(arr){
    const listtemp = document.createElement("div") ;
    const nametemp = document.createElement("p") ;
    const hourtemp = document.createElement("p") ;
    const keys = Object.keys(arr);
    listtemp.classList.add("bg-light" ,"d-flex", "justify-content-between", "row" ,"align-items-center", "border", "border-dark") ;
    listtemp.setAttribute("id","list")
    nametemp.classList.add("pt-1", "pl-3", "h5")
    hourtemp.classList.add("pt-2", "pr-2")

    let tmp = document.getElementById("lists") ;
    tmp.innerHTML = `` ;

    for(let i=0 ; i<keys.length ; i++){
      let list = listtemp.cloneNode();
      let name = nametemp.cloneNode();
      let hour = hourtemp.cloneNode();

      name.innerHTML = `${keys[i]}` ;
      hour.innerHTML = `Estimate ${arr[keys[i]]} hours` ;
      
      list.append(name,hour) ;

      document.getElementById("lists").append(list) ;
    }
  }
}

function initialView(){
  const tmp = elements.target ;
  tmp.innerHTML = 
  `
    <div class="m-3" id="steps">
    <div class="" id="step1">
      <p class="mb-0 mt-2">Step1: Select your brand</p>
      <select class="col-2 form-control form-control-sm" id="step1-form">
      </select>
    </div>
    <div class="" id="step2">
      <p class="mb-0 mt-2">Step2: Select your model</p>
      <select class=" col-3 form-control form-control-sm" id="step2-form">
      </select>
    </div>
    <div class="" id="step3">
      <p class="mb-0 mt-2">Step3: Input accessory power consumption</p>
        <input type="number" class="col-2 form-control" id="step3-form" max=100 min=1 value=1>
      </div>
    <div class="" id="step4">
      <p class="mb-0 mt-2">Step4: Choose your battery</p>
      <div class="container" id="lists">
        <div id="list"></div>
      </div>
    </div>

  </div>
  `
}

//イベントリスナー設定
Camera.setBrand();
