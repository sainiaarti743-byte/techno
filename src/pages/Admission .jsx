import React from "react";

const Admission = () => {
  return (
   <>
   
   <div className="container">

   <div id="admission">
    <h5>APPLICATION FORM FOR ADMISSION</h5>
    <p>Please uses this form to apply for your child’s admission to our school. We need complete & accurate
       information about the student. So make sure you fill out all fields.</p>

    <div className="form">
        <label>1. Name of the student</label>
        <input type="text" name="name" required/>

        <label>2. Date Of Birth</label>
        <input type="date" name="dob" required/>

        <label>3. Aadhar Card No</label>
        <input type="number" name="aadhar" required/>

        <label>4. Mother’s Tongue</label>
        <input type="text" name="mtongue" required/>

        <label>5. Name of the Father / Guardian</label>
        <input type="text" name="fname"required/>

        <label>6. Name of the Mother / Guardian</label>
        <input type="text" name="mname" required/>

        <label>7. Present Address</label>
        <input type="text" class="address-line"required/>
        <input type="text" class="address-line"/>
        <input type="text" class="address-line"/>

        <label>8. Permanent Address</label>
        <input type="text" class="address-line"required/>
        <input type="text" class="address-line"/>
        <input type="text" class="address-line"/>

        <label>9. Phone No. <span class="spacer">Father</span></label>
        <input type="number" name="fno"required/>

        <label><span class="spacer2">Mother</span></label>
        <input type="number" name="mno"required/>

        <label><span class="spacer2">Guardian</span></label>
        <input type="number" name="gno"/>

        <label>10. Occupation of Father / Mother / Guardian (✔)</label>
        <div class="checkbox-group" >
            <label><input type="checkbox"/> Service</label>
            <label><input type="checkbox"/> Profession</label>
            <label><input type="checkbox"/> Business</label>
        </div>

        <label>11. A brief about Occupation - Father</label>
        <input type="text" name="briefFather"required/>

        <label><span class="spacer3">Mother</span></label>
        <input type="text" name="briefMother"/>

       <a href="home.html"><button>Submit</button></a> 

    </div>
    </div>
</div>
   
   
   </>
  );
};

export default Admission;
