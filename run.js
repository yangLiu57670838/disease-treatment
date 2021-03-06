//how to read json file with correct fomart json data??

var text1 = '[' + 
'{"Diseases":"Acute lower respiratory tract infections","Intervention":"Vit A"},' +
'{"Diseases":"Acute upper respiratory tract infections","Intervention":"Nasal Irrigation"},' + 
'{"Diseases":"upper respiratory tract infections","Intervention":"Probiotics"},' +
'{"Diseases":"ARI","Intervention":"Mucolytic agent"},' +
'{"Diseases":"ARI","Intervention":"Fluid therapy"},' +
'{"Diseases":"ARI","Intervention":"Antibiotics"},' +
'{"Diseases":"ARI","Intervention":"Antibiotics"},' +
'{"Diseases":"ARI","Intervention":"Exercise"},' +
'{"Diseases":"ARI","Intervention":"Homeopathy"},' +
'{"Diseases":"ARI","Intervention":"Herbs"},' +
'{"Diseases":"ARI","Intervention":"Procalcitonin"},' +
'{"Diseases":"Asthma","Intervention":"Remediating buildings"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Antibiotics"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Bronchodilators"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Chest Physiotherapy"},' +
'{"Diseases":"Bronchiolitis","Intervention":"CPAP"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Adrenaline"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Corticosteroids"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Airway therapy"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Airway therapy"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Leukotriene inhibitors"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Antibiotics"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Deoxyribonuclease"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Fluid therapy"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Steam inhalation"},' +
'{"Diseases":"Bronchiolitis","Intervention":"Surfactant therapy"},' +
'{"Diseases":"Bronchitis","Intervention":"Antibiotics"},' +
'{"Diseases":"Bronchitis","Intervention":"Bronchodilators"},' +
'{"Diseases":"Bronchitis","Intervention":"Chinese herbs"},' +
'{"Diseases":"Bronchitis","Intervention":"Vaccination"},' +
'{"Diseases":"Common Cold","Intervention":"Paracetamol"},' +
'{"Diseases":"Common Cold","Intervention":"Antibiotics"},' +
'{"Diseases":"Common Cold","Intervention":"Antibiotics"},' +
'{"Diseases":"Common Cold","Intervention":"Antibiotics"},' +
'{"Diseases":"Common Cold","Intervention":"Antihistamines"},' +
'{"Diseases":"Common Cold","Intervention":"Chinese herbs"},' +
'{"Diseases":"Common Cold","Intervention":"Corticosteroids"},' +
'{"Diseases":"Common Cold","Intervention":"Decongestants"},' +
'{"Diseases":"Common Cold","Intervention":"Echinacea"},' +
'{"Diseases":"Common Cold","Intervention":"Garlic"},' +
'{"Diseases":"Common Cold","Intervention":"Airway therapy"},' +
'{"Diseases":"Common Cold","Intervention":"Anticholinergic "},' +
'{"Diseases":"Common Cold","Intervention":"NSAIDs"},' +
'{"Diseases":"Common Cold","Intervention":"Antihistamine, decongestant,analgesic combo (split this into 3)"},' +//??
'{"Diseases":"Common Cold","Intervention":"Vaccines"},' +
'{"Diseases":"Common Cold","Intervention":"Vit C"},' +
'{"Diseases":"Common Cold","Intervention":"Zinc"},' +
'{"Diseases":"Community-acquired pneumonia","Intervention":"Antibiotics"},' +
'{"Diseases":"COPD","Intervention":"Vaccination"},' +
'{"Diseases":"Cough","Intervention":"Honey"},' +
'{"Diseases":"Cough","Intervention":"OTC"},' +
'{"Diseases":"Croup","Intervention":"Adrenaline"},' +
'{"Diseases":"Croup","Intervention":"Corticosteroids"},' +
'{"Diseases":"Croup","Intervention":"Airway therapy"},' +
'{"Diseases":"Diptheria","Intervention":"Combined DTP-HBV vaccine"},' +
'{"Diseases":"Diptheria","Intervention":"Combined DTP-HBV-HIB vaccine"},' +
'{"Diseases":"Empyema","Intervention":"Surgery"},' +
'{"Diseases":"Haemophilus Influenzae B","Intervention":"Combined DTP-HBV-HIB vaccine"},' +
'{"Diseases":"Hep B","Intervention":"Combined DTP-HBV vaccine"},' +
'{"Diseases":"Hep B","Intervention":"Combined DTP-HBV-HIB vaccine"},' +
'{"Diseases":"Herpes Zoster","Intervention":"Vaccines"},' +
'{"Diseases":"Hospital-acquired pneumonia","Intervention":"Antibiotics"},' +
'{"Diseases":"Infections","Intervention":"Remediating buildings"},' +
'{"Diseases":"Infectious mononucleosis","Intervention":"Steroids"},' +
'{"Diseases":"Influenza","Intervention":"Vaccines"},' +
'{"Diseases":"Influenza","Intervention":"Antivirals"},' +
'{"Diseases":"Influenza","Intervention":"Chinese herbs"},' +
'{"Diseases":"Influenza","Intervention":"Corticosteroids"},' +
'{"Diseases":"Influenza","Intervention":"Homeopathy"},' +
'{"Diseases":"Influenza","Intervention":"Antivirals"},' +
'{"Diseases":"Influenza","Intervention":"Statins"},' +
'{"Diseases":"Laryngitis","Intervention":"Antibiotics"},' +
'{"Diseases":"Laryngitis*","Intervention":"Antibiotics"},' +
'{"Diseases":"Lower respiratory tract infections","Intervention":"Oxygen therapy"},' +
'{"Diseases":"LRTI","Intervention":"Antibiotics"},' +
'{"Diseases":"LRTI","Intervention":"Antibiotic"},' +
'{"Diseases":"Measles","Intervention":"Antibiotics"},' +
'{"Diseases":"Measles","Intervention":"Chinese herbs"},' +
'{"Diseases":"Measles","Intervention":"Immunisation/Vaccination"},' +
'{"Diseases":"Measles","Intervention":"Vit A"},' +
'{"Diseases":"Measles","Intervention":"Vaccines"},' +
'{"Diseases":"Meningitis","Intervention":"Fluid therapy"},' +
'{"Diseases":"Meningitis","Intervention":"Antibiotics"},' +
'{"Diseases":"Meningitis","Intervention":"Corticosteroids"},' +
'{"Diseases":"Meningitis","Intervention":"Corticosteroids"},' +
'{"Diseases":"Meningitis","Intervention":"Osmotic therapy"},' +
'{"Diseases":"Meningitis ","Intervention":"Cephalosporins- Antibiotics"},' +
'{"Diseases":"Meningococcal disease","Intervention":"Antibiotics"},' +
'{"Diseases":"Meningococcal disease","Intervention":"Antibiotics"},' +
'{"Diseases":"Meningococcal disease","Intervention":"Vaccination"},' +
'{"Diseases":"Meningococcal disease","Intervention":"Anti-cytokine therapy"},' +
'{"Diseases":"Meningococcal disease","Intervention":"Anti-endotoxin therapy"},' +
'{"Diseases":"Mumps","Intervention":"Acupuncture"},' +
'{"Diseases":"Mumps","Intervention":"Chinese herbs"},' +
'{"Diseases":"Mumps","Intervention":"Vaccines"},' +
'{"Diseases":"OM","Intervention":"Antibiotics"},' +
'{"Diseases":"OM","Intervention":"Antibiotics"},' +
'{"Diseases":"OM","Intervention":"Antibiotics"},' +
'{"Diseases":"OM","Intervention":"Vaccination"},' +
'{"Diseases":"OM","Intervention":"Antibiotics"},' +
'{"Diseases":"OM","Intervention":"Vaccination"},' +
'{"Diseases":"OM","Intervention":"Xylitol"},' +
'{"Diseases":"OM","Intervention":"Zinc"},' +
'{"Diseases":"OM","Intervention":"Analgesia"},' +
'{"Diseases":"Pertussis","Intervention":"Vaccination"},' +
'{"Diseases":"Pertussis","Intervention":"Antibiotics"},' +
'{"Diseases":"Pertussis","Intervention":"Vaccines"},' +
'{"Diseases":"Pharyngitis","Intervention":"Antibiotics"},' +
'{"Diseases":"Pharyngitis","Intervention":"Antibiotics"},' +
'{"Diseases":"Pharyngitis","Intervention":"Chinese herbs"},' +
'{"Diseases":"Pharyngitis","Intervention":"Corticosteroids"},' +
'{"Diseases":"Pneumococcal disease","Intervention":"Vaccination"},' +
'{"Diseases":"Pneumococcal disease","Intervention":"Vaccines"},' +
'{"Diseases":"Pneumonia","Intervention":"Chest Physiotherapy"},' +
'{"Diseases":"Pneumonia","Intervention":"Corticosteroids"},' +
'{"Diseases":"Pneumonia","Intervention":"Immunostimulant"},' +
'{"Diseases":"Pneumonia","Intervention":"OTC"},' +
'{"Diseases":"Pneumonia","Intervention":"Oxygen therapy"},' +
'{"Diseases":"Pneumonia","Intervention":"Vaccination"},' +
'{"Diseases":"Pneumonia","Intervention":"Vit A"},' +
'{"Diseases":"Pneumonia","Intervention":"Statins"},' +
'{"Diseases":"Pneumonia","Intervention":"Vit C"},' +
'{"Diseases":"Pneumonia","Intervention":"Zinc"},' +
'{"Diseases":"Pneumonia","Intervention":"Antibiotics"},' +
'{"Diseases":"Respiratory Failure","Intervention":"CPAP"},' +
'{"Diseases":"Respiratory Tract Infection","Intervention":"Immunostimulants"},' +
'{"Diseases":"Respiratory tract Infection","Intervention":"Remediating buildings"},' +
'{"Diseases":"RSV","Intervention":"Immunoglobulin"},' +
'{"Diseases":"RSV","Intervention":"Monoclonal antibody"},' +
'{"Diseases":"Rubella","Intervention":"Immunisation/Vaccination"},' +
'{"Diseases":"Rubella","Intervention":"Immunisation/Vaccination"},' +
'{"Diseases":"Rubella","Intervention":"Vaccines"},' +
'{"Diseases":"SARS","Intervention":"Chinese herbs"},' +
'{"Diseases":"Sinusitis","Intervention":"Antibiotics"},' +
'{"Diseases":"Sinusitis","Intervention":"Antihistamines"},' +
'{"Diseases":"Sinusitis","Intervention":"Corticosteroids"},' +
'{"Diseases":"Sinusitis","Intervention":"Decongestants"},' +
'{"Diseases":"Sinusitis","Intervention":"Nasal irrigation"},' +
'{"Diseases":"Sinusitis","Intervention":"Corticosteroids"},' +
'{"Diseases":"Tetanus","Intervention":"Combined DTP-HBV-HIB vaccine"},' +
'{"Diseases":"Tetanus","Intervention":"Combined DTP-HBV vaccine"},' +
'{"Diseases":"Varicella","Intervention":"Antivirals"},' +
'{"Diseases":"Varicella","Intervention":"Antivirals"},' +
'{"Diseases":"Varicella","Intervention":"Vaccines"},' +
'{"Diseases":"Ventilator-associated pneumonia","Intervention":"Antibiotics"},' +
'{"Diseases":"Ventilator-associated pneumonia","Intervention":"Probiotics"},' +
'{"Diseases":"Ventilator-associated pneumonia","Intervention":"cultures"},' +
'{"Diseases":"Ventilator-associated pneumonia","Intervention":"Positioning"},' +
'{"Diseases":"Wheeze","Intervention":"Antibiotics"},' +
'{"Diseases":"Whooping cough","Intervention":"Combined DTP-HBV vaccine"},' +
'{"Diseases":"Whooping cough","Intervention":"Combined DTP-HBV-HIB vaccine"}]';



obj = JSON.parse(text1);
//var _ = require('lodash');

var number = 1;
var all = new Array();
//console.log(obj[0].Diseases);

 for(var i=0;i<obj.length-1;i++){

        
          j = i + 1;

       if (obj[i].Diseases == obj [j].Diseases)//only if same diseases are sorted linearly?

         {
              number = number + 1;
          // console.log(number);
              
         }
else{
             var count = new Array();
            count['Diseases'] = obj[i].Diseases;
             count['amount'] = number;
             all.push(count);
            var number = 1;
          // console.log(number);
}


    }




var data = new Array();
for(var s=0;s<obj.length;s++)
{
    relationship = 1;//why there are two way relationships??
    if (s > 0)

{
       ss = s - 1;
     if((obj[ss].Diseases == obj[s].Diseases) && (obj[ss].Intervention == obj[s].Intervention))

   {
       
        relationship = relationship + 1;
        data.pop();//delete last element of array which is repeated

   }

} 


    if(obj[s].Intervention.search(",") == -1)
  {
  var row = new Array();
   row[0] = obj[s].Diseases;
   row[1] = obj[s].Intervention;
   row[2] = relationship;
   row[3] = relationship;

   data.push(row);
  }
    else
  {
     var a = obj[s].Intervention.split(",");//only when comma separate string?
         for(var e=0; e<a.length; e++)
              {
          
                var row = new Array();
                row[0] = obj[s].Diseases;
                row[1] = a[e];
                row[2] = relationship;
                row[3] = relationship;
                data.push(row);
               
              }
  }

}

for(var t=0;t<data.length;t++)
{
    
   console.log(data[t]);
    
}



