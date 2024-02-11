function SubmitBut() {

    let firName = document.getElementById("Firstname");
    let midName = document.getElementById("Middlename");
    let lstName = document.getElementById("Lastname");
    let phNamber = document.getElementById("Ph Namber");
    let moNamber = document.getElementById("Mobile Namber");
    let piCode = document.getElementById("Pincode");
    let gad = document.querySelector('input[name="gender"]:checked')
    let birt = document.getElementById("Birthdate");
    let cast = document.querySelector('input[name="categary"]:checked')
    let emil = document.getElementById("email");
    let ads = document.getElementById("Address");
    let Skill = document.getElementById("Skill");
    let input = document.getElementById('input-file');
    let img = document.getElementById('img_jpg');


   
   input.addEventListener("change", () => {
     img.src = URL.createObjectURL(input.files[0]);
   })


     

    firNam = firName.value
    midNam = midName.value
    lstNam = lstName.value
    userName = (firNam + " " + midNam + " " + lstNam)

    if (firNam.length == "") {
        alert("Please enter a first name");
        return false;
    }

    if (midNam.length == "") {
        alert("Please enter a middel name");
        return false;
    }

    if (lstNam.length == "") {
        alert("Please enter a last name");
        return false;
    }

    phNab = phNamber.value

    if (phNab.length == "") {
        alert("Please enter a phone namber");
        return false;
    }

    if (phNab.length < 10 || phNab.length > 10) {
        alert("Please enter 10 degit namber");
        return false;
    }

     moNab = moNamber.value
    
    if (moNab.length == "") {
        alert("Please enter a mobile namber");
        return false;
    }
    

    if (moNab.length < 10 || moNab.length > 10) {

        alert("Please enter 10 degit namber");
        return false;
    }
    
    piCod = piCode.value
 
    if(piCod.length == ""){
        alert("Please enter a pincode namber");
        return false;
    }

    if( piCod.length < 6 || piCod.length > 6){
        alert("Please enter 6 degit pincode namber");
        return false;
    }


    gender = gad.value
    brt = birt.value
     if(brt.length == ""){
        alert("Please enter a birth date");
        return false;
     }
    cst = cast.value
    eml = emil.value
     if(eml.length == ""){
        alert("Please enter a emil id");
        return false;
     }

    ad = ads.value
    if(ad.length == ""){
        alert("Please enter a Address");
        return false;
    }
    skl = Skill.value


    // Eductions details // 
    // SSC //
    let sccShol = document.getElementById("SScScl");
    let sccBord = document.getElementById("SScBord");
    let sccYear = document.getElementById("SScYear");
    let sccPar = document.getElementById("SScPar");
    let sccTry = document.getElementById("SScTry");

    sscSh = sccShol.value
    if(sscSh.length == ""){
        alert("Please enter a Shcool/University")
        return false;
    }
    sscBo = sccBord.value
    if(sscBo.length == ""){
        alert("Please enter a bord")
        return false;
    }
    sscYe = sccYear.value
    if(sscYe.length == ""){
        alert("Please enter a Year")
        return false;
    }
    sscPa = sccPar.value
    if(sscPa.length == ""){
        alert("Please enter a Par/%")
        return false;
    }
    sscTr = sccTry.value
    if(sscTr.length == ""){
        alert("Please enter a Trayel")
        return false;
    }

    // HSC //
    let HScSho = document.getElementById("HScScl");
    let HScBord = document.getElementById("HScBord");
    let HScYear = document.getElementById("HScYear");
    let HScPar = document.getElementById("HScPar");
    let HScTry = document.getElementById("HScTry");

    HScSh = HScSho.value
    if(HScSh.length == ""){
        alert("Please enter a Shcool/University")
        return false;
    }
    HScBo = HScBord.value
    if(HScBo.length == ""){
        alert("Please enter a bord")
        return false;
    }
    HScYe = HScYear.value
    if(HScYe.length == ""){
        alert("Please enter a Year")
        return false;
    }
    HScPa = HScPar.value
    if(HScPa.length == ""){
        alert("Please enter a  Par/% ")
        return false;
    }
    HScTr = HScTry.value
    if(HScTr.length == ""){
        alert("Please enter a  Trayel")
        return false;
    }

    // Grgution //
    let grgShol = document.getElementById("GRgScl");
    let grgBord = document.getElementById("GRgBord");
    let grgYear = document.getElementById("GRgYear");
    let grgPar = document.getElementById("GRgPar");
    let grgTry = document.getElementById("GRgTry");

    grgSh = grgShol.value
    if(grgSh.length == ""){
        alert("Please enter a Shcool/University")
        return false;
    }
    grgBo = grgBord.value
    if(grgBo.length == ""){
        alert("Please enter a bord")
        return false;
    }
    grgYe = grgYear.value
    if(grgYe.length == ""){
        alert("Please enter a Year")
        return false;
    }
    grgPa = grgPar.value
    if(grgPa.length == ""){
        alert("Please enter a Par/%")
        return false;
    }
    grgTr = grgTry.value
    if(grgTr.length == ""){
        alert("Please enter a Trayel")
        return false;
    }


    // POST  Grgution //
    let PogrgShol = document.getElementById("POGRgScl");
    let PogrgBord = document.getElementById("POGRgBord");
    let PogrgYear = document.getElementById("POGRgYear");
    let PogrgPar = document.getElementById("POGRgPar");
    let PogrgTry = document.getElementById("POGRgTry");

    PogrgSh = PogrgShol.value
    if(PogrgSh.length == ""){
        alert("Please enter a Shcool/University")
        return false;
    }
    PogrgBo = PogrgBord.value
    if(PogrgBo.length == ""){
        alert("Please enter a bord")
        return false;
    }
    PogrgYe = PogrgYear.value
    if(PogrgYe.length == ""){
        alert("Please enter a Year")
        return false;
    }
    PogrgPa = PogrgPar.value
    if(PogrgPa.length == ""){
        alert("Please enter a Par/%")
        return false;
    }
    PogrgTr = PogrgTry.value
    if(PogrgTr.length == ""){
        alert("Please enter a Trayel")
        return false;
    }





  // out put //

    let h1 = document.getElementById("h1")
    h1.parentElement.remove();
    newbody = document.createElement("body")
    newbody.innerHTML =
        ` <div class="BOdy" style="margin-left: 150px; margin-right: 150px; height: 1500px;">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">


    <div class="card" style="width: 100%; margin-top: 20px; background-color: rgb(219, 244, 244); ">
        <div class="card-header" style="background-color: blueviolet; color: white; font-size: 25px;">
            <p style="text-align: center; font-size: 30px; color: white; font-weight: 500;">${userName}</p>
        </div>
        <div class="navbar" style="display: flex;">

            <img src="${imges}/" alt="" id ="img_jpg"
                style="background-size: cover; height: 170px; width: 120px; margin-left: 80px;">
            <div class="US" style="display: flex;">
                <div class="NO" style="margin-left: -800px;">
                    <h4>Ph Namber</h4>
                    <h4>Mobile Namber</h4>
                    <h4>Pincode</h4>
                    <h4>Gender</h4>
                    <h4>Birthdate</h4>
                    <h4>Cast</h4>
                    <h4>Email ID</h4>
                </div>
                <div class="Dot" style="margin-left: 120px; margin-right: 70px;">
                    <h4>:</h4>
                    <h4>:</h4>
                    <h4>:</h4>
                    <h4>:</h4>
                    <h4>:</h4>
                    <h4>:</h4>
                    <h4>:</h4>
                </div>
                <div class="output">
                    <h4>${phNab}</h4>
                    <h4>${moNab}</h4>
                    <h4>${piCod}</h4>
                    <h4>${gender}</h4>
                    <h4>${brt}</h4>
                    <h4>${cst}</h4>
                    <h4>${eml}</h4>
                </div>
            </div>
        </div>
        <hr>
        <div class="Canter" style="display: flex; justify-content: space-evenly;margin-right: 150px; margin-bottom: 5px;">
        <h4>Address :</h4>
        <div class="AD">
            <h6>${ad}</h6>
        </div>
        <h4>Skill :</h4>
        <div class="Sk">
            <h6>${skl}</h6>
        </div>
    </div>
        <hr>
        <h3 style="text-align: center;color: rgb(36, 10, 15);background-color: coral;">Education Detial</h3>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Stady</th>
                    <th>School/University</th>
                    <th>Bord</th>
                    <th>Year</th>
                    <th>Par/%</th>
                    <th>Tryel</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>SSC</th>
                    <td>${sscSh}</td>
                    <td>${sscBo}</td>
                    <td>${sscYe}</td>
                    <td>${sscPa}</td>
                    <td>${sscTr}</td>
                </tr>
                <tr>
                    <th>HSC</th>
                    <td>${HScSh}</td>
                    <td>${HScBo}</td>
                    <td>${HScYe}</td>
                    <td>${HScPa}</td>
                    <td>${HScTr}</td>


                </tr>
                <tr>
                    <th>Grgution</th>
                    <td>${grgSh}</td>
                    <td>${grgBo}</td>
                    <td>${grgYe}</td>
                    <td>${grgPa}</td>
                    <td>${grgTr}</td>
                </tr>
                <tr>
                    <th>PostGrgution</th>
                    <td>${PogrgSh}</td>
                    <td>${PogrgBo}</td>
                    <td>${PogrgYe}</td>
                    <td>${PogrgPa}</td>
                    <td>${PogrgTr}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>`
    html.appendChild(newbody);


}