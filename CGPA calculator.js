function sem() {
    var v = document.getElementById("semester").value;
    var t = document.getElementById("textin");
    document.getElementById("resin").innerHTML = "";
    if (v == 1) {
        t.innerHTML = "Management and Human Values          ";
        t.innerHTML += '<input type="text" id="a">' + '<br><br>';

        t.innerHTML += "Electrical Sciences                  ";
        t.innerHTML += '<input type="text" id="b">' + '<br><br>';

        t.innerHTML += "Computer Programming                 ";
        t.innerHTML += '<input type="text" id="c">' + '<br><br>';

        t.innerHTML += "Physics                              ";
        t.innerHTML += '<input type="text" id="d">' + '<br><br>';

        t.innerHTML += "Biology                              ";
        t.innerHTML += '<input type="text" id="e">' + '<br><br>';

        t.innerHTML += "Engineering Graphics                 ";
        t.innerHTML += '<input type="text" id="f">' + '<br><br>';

        t.innerHTML += "Computer Programming Lab             ";
        t.innerHTML += '<input type="text" id="g">' + '<br><br>';

        t.innerHTML += "Electrical Sciences Lab              ";
        t.innerHTML += '<input type="text" id="h">' + '<br><br>';

        t.innerHTML += "Physics Lab                          ";
        t.innerHTML += '<input type="text" id="i">' + '<br><br>';
    }
    if (v == 2) {
        t.innerHTML = "Mathematics-I                        ";
        t.innerHTML += '<input type="text" id="a2">' + '<br><br>';

        t.innerHTML += "Chemistry                            ";
        t.innerHTML += '<input type="text" id="b2">' + '<br><br>';

        t.innerHTML += "Elements of Mechanical Enng          ";
        t.innerHTML += '<input type="text" id="c2">' + '<br><br>';

        t.innerHTML += "English Communication                ";
        t.innerHTML += '<input type="text" id="d2">' + '<br><br>';

        t.innerHTML += "Environmental Science and Tecnology  ";
        t.innerHTML += '<input type="text" id="e2">' + '<br><br>';

        t.innerHTML += "Basic Electronics                    ";
        t.innerHTML += '<input type="text" id="f2">' + '<br><br>';

        t.innerHTML += "Manufacturing Processes              ";
        t.innerHTML += '<input type="text" id="g2">' + '<br><br>';

        t.innerHTML += "English Communication Lab            ";
        t.innerHTML += '<input type="text" id="h2">' + '<br><br>';

        t.innerHTML += "Chemistry Lab                        ";
        t.innerHTML += '<input type="text" id="i2">' + '<br><br>';

        t.innerHTML += "Basic Electronics Lab                ";
        t.innerHTML += '<input type="text" id="j2">' + '<br><br>';
        t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                        ";
        t.innerHTML += '<input type="text" value=NaN id="sg12" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center;">' + '<br><br>';
    }
    if (v == 3) {
        t.innerHTML = "Mathematics-II                       ";
        t.innerHTML += '<input type="text" id="a3">' + '<br><br>';

        t.innerHTML += "Analysis and Synthesis of Networks   ";
        t.innerHTML += '<input type="text" id="b3">' + '<br><br>';

        t.innerHTML += "Electronic Devices and Circuits      ";
        t.innerHTML += '<input type="text" id="c3">' + '<br><br>';

        t.innerHTML += "Digital Electronics                  ";
        t.innerHTML += '<input type="text" id="d3">' + '<br><br>';

        t.innerHTML += "Communication Signals and Systems    ";
        t.innerHTML += '<input type="text" id="e3">' + '<br><br>';

        t.innerHTML += "Object Oriented Programming          ";
        t.innerHTML += '<input type="text" id="f3">' + '<br><br>';

        t.innerHTML += "Object Oriented Programming Lab      ";
        t.innerHTML += '<input type="text" id="g3">' + '<br><br>';

        t.innerHTML += "Analysis-Synthesis of Networks Lab   ";
        t.innerHTML += '<input type="text" id="h3">' + '<br><br>';

        t.innerHTML += "Electronic Devices-Circuit Lab       ";
        t.innerHTML += '<input type="text" id="i3">' + '<br><br>';

        t.innerHTML += "Digital Electronic Lab               ";
        t.innerHTML += '<input type="text" id="j3">' + '<br><br>';
        t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                        ";
        t.innerHTML += '<input type="text" id="sg13" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                       ";
        t.innerHTML += '<input type="text" value=NaN id="sg23" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';
    }
    if (v == 4) {
        t.innerHTML = "Mathematics-III                      ";
        t.innerHTML += '<input type="text" id="a4">' + '<br><br>';

        t.innerHTML += "Analog Integrated Circuits           ";
        t.innerHTML += '<input type="text" id="b4">' + '<br><br>';

        t.innerHTML += "Analog Communication Systems         ";
        t.innerHTML += '<input type="text" id="c4">' + '<br><br>';

        t.innerHTML += "Data Structures Algorithms           ";
        t.innerHTML += '<input type="text" id="d4">' + '<br><br>';

        t.innerHTML += "Electronic Measurement Instrm        ";
        t.innerHTML += '<input type="text" id="e4">' + '<br><br>';

        t.innerHTML += "Electro Magnetic Field Theory        ";
        t.innerHTML += '<input type="text" id="f4">' + '<br><br>';

        t.innerHTML += "Electronic Measurement Instrm Lab    ";
        t.innerHTML += '<input type="text" id="g4">' + '<br><br>';

        t.innerHTML += "Data Structures Algorithm Lab        ";
        t.innerHTML += '<input type="text" id="h4">' + '<br><br>';

        t.innerHTML += "Analog Communication System Lab      ";
        t.innerHTML += '<input type="text" id="i4">' + '<br><br>';

        t.innerHTML += "Analog Integrated Circuit Lab        ";
        t.innerHTML += '<input type="text" id="j4">' + '<br><br>';
        t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                        ";
        t.innerHTML += '<input type="text" id="sg14" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                       ";
        t.innerHTML += '<input type="text" id="sg24" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-III                      ";
        t.innerHTML += '<input type="text" value=NaN id="sg34" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';
    }
    if (v == 5) {
        t.innerHTML = "Microprocessor and Applications      ";
        t.innerHTML += '<input type="text" id="a5">' + '<br><br>';

        t.innerHTML += "VLSI Circuit Design                  ";
        t.innerHTML += '<input type="text" id="b5">' + '<br><br>';

        t.innerHTML += "HR Management Industrial Relations   ";
        t.innerHTML += '<input type="text" id="c5">' + '<br><br>';

        t.innerHTML += "Material Science                     ";
        t.innerHTML += '<input type="text" id="d5">' + '<br><br>';

        t.innerHTML += "Control Engineering                  ";
        t.innerHTML += '<input type="text" id="e5">' + '<br><br>';

        t.innerHTML += "Operating Systems                    ";
        t.innerHTML += '<input type="text" id="f5">' + '<br><br>';

        t.innerHTML += "Microprocessor and Applications Lab  ";
        t.innerHTML += '<input type="text" id="g5">' + '<br><br>';

        t.innerHTML += "Programming with MATLAB-LabView      ";
        t.innerHTML += '<input type="text" id="h5">' + '<br><br>';

        t.innerHTML += "Operating Systems Lab                ";
        t.innerHTML += '<input type="text" id="i5">' + '<br><br>';

        t.innerHTML += "Industrial Training                  ";
        t.innerHTML += '<input type="text" id="j5">' + '<br><br>';
        t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                        ";
        t.innerHTML += '<input type="text" id="sg15" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                       ";
        t.innerHTML += '<input type="text" id="sg25" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-III                      ";
        t.innerHTML += '<input type="text" id="sg35" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-IV                       ";
        t.innerHTML += '<input type="text" value=NaN id="sg45" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';
    }
    if (v == 6) {
        t.innerHTML = "Digital System Design                ";
        t.innerHTML += '<input type="text" id="a6">' + '<br><br>';

        t.innerHTML += "Digital Communication System         ";
        t.innerHTML += '<input type="text" id="b6">' + '<br><br>';

        t.innerHTML += "Digital Signal Processing            ";
        t.innerHTML += '<input type="text" id="c6">' + '<br><br>';

        t.innerHTML += "Adv Microprocessor-Microcontroller   ";
        t.innerHTML += '<input type="text" id="d6">' + '<br><br>';

        t.innerHTML += "Engineering Economics                ";
        t.innerHTML += '<input type="text" id="e6">' + '<br><br>';

        t.innerHTML += "Digital System Design Lab            ";
        t.innerHTML += '<input type="text" id="f6">' + '<br><br>';

        t.innerHTML += "Digital Communication System Lab     ";
        t.innerHTML += '<input type="text" id="g6">' + '<br><br>';

        t.innerHTML += "Digital Signal Processing Lab        ";
        t.innerHTML += '<input type="text" id="h6">' + '<br><br>';

        t.innerHTML += "Adv Microprcsr-Microcntr Lab         ";
        t.innerHTML += '<input type="text" id="i6">' + '<br><br>';
        t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                        ";
        t.innerHTML += '<input type="text" id="sg16" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                       ";
        t.innerHTML += '<input type="text" id="sg26" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-III                      ";
        t.innerHTML += '<input type="text" id="sg36" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-IV                       ";
        t.innerHTML += '<input type="text" id="sg46" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-V                        ";
        t.innerHTML += '<input type="text" value=NaN id="sg56" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">';
    }
    if (v == 7) {
        t.innerHTML = "Microwave Engg                       ";
        t.innerHTML += '<input type="text" id="a7">' + '<br><br>';

        t.innerHTML += "Biomedical Signal Processing         ";
        t.innerHTML += '<input type="text" id="b7">' + '<br><br>';

        t.innerHTML += "Departmental Elective-I              ";
        t.innerHTML += '<input type="text" id="c7">' + '<br><br>';

        t.innerHTML += "Departmental Elective-II             ";
        t.innerHTML += '<input type="text" id="d7">' + '<br><br>';

        t.innerHTML += "Open Elective-I                      ";
        t.innerHTML += '<input type="text" id="e7">' + '<br><br>';

        t.innerHTML += "Microwave Enng Lab                   ";
        t.innerHTML += '<input type="text" id="f7">' + '<br><br>';

        t.innerHTML += "Biomedical Signal Prcs Lab           ";
        t.innerHTML += '<input type="text" id="g7">' + '<br><br>';

        t.innerHTML += "Industrial Training                  ";
        t.innerHTML += '<input type="text" id="h7">' + '<br><br>';

        t.innerHTML += "Project Phase-I                      ";
        t.innerHTML += '<input type="text" id="i7">' + '<br><br>';
        t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                        ";
        t.innerHTML += '<input type="text" id="sg17" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                       ";
        t.innerHTML += '<input type="text" id="sg27" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-III                      ";
        t.innerHTML += '<input type="text" id="sg37" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-IV                       ";
        t.innerHTML += '<input type="text" id="sg47" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-V                        ";
        t.innerHTML += '<input type="text" id="sg57" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-VI                       ";
        t.innerHTML += '<input type="text" value=NaN id="sg67" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">';
    }
    if (v == 8) {
        t.innerHTML = "Adv Communication Systems            ";
        t.innerHTML += '<input type="text" id="a8">' + '<br><br>';

        t.innerHTML += "Microelectronics                     ";
        t.innerHTML += '<input type="text" id="b8">' + '<br><br>';

        t.innerHTML += "Departmental Elective-III            ";
        t.innerHTML += '<input type="text" id="c8">' + '<br><br>';

        t.innerHTML += "Departmental Elective-IV             ";
        t.innerHTML += '<input type="text" id="d8">' + '<br><br>';

        t.innerHTML += "Open Elective-II                     ";
        t.innerHTML += '<input type="text" id="e8">' + '<br><br>';

        t.innerHTML += "Project Phase-II                     ";
        t.innerHTML += '<input type="text" id="f8">' + '<br><br>';
        t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                        ";
        t.innerHTML += '<input type="text" id="sg18" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                       ";
        t.innerHTML += '<input type="text" id="sg28" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-III                      ";
        t.innerHTML += '<input type="text" id="sg38" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-IV                       ";
        t.innerHTML += '<input type="text" id="sg48" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-V                        ";
        t.innerHTML += '<input type="text" id="sg58" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-VI                       ";
        t.innerHTML += '<input type="text" id="sg68" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-VII                      ";
        t.innerHTML += '<input type="text" value=NaN id="sg78" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">';
    }
    document.getElementById("sgb").style.marginTop = "30px";
}
function calcsg() {
    var v = document.getElementById("semester").value;
    var r = document.getElementById("resin");
    var totalc = 0;
    var ftotalc = 0;
    var fobtc = 0;
    var n;
    var obtc = 0;
    var s1 = [];
    var val = "";
    if (v == 1) {
        totalc = 20;                                                                            //total credits in a semester
        var regc = { mhv: 3, es: 2, cp: 2, phy: 4, bio: 3, edl: 3, cpl: 1, esl: 1, phyl: 1 };       //registered credits in a semester
        n = 9;                                                                                      //no. of subjects

        var i = 0, j = 10;
        for (x in regc) {
            while (j >= 5)
                s1.push(regc[x] * j--);
            j = 10;
        }
        val += ((document.getElementById("a").value.substring(0,1)).toUpperCase());                                        //ASCII value s==83
        val += ((document.getElementById("b").value.substring(0,1)).toUpperCase());
        val += ((document.getElementById("c").value.substring(0,1)).toUpperCase());
        val += ((document.getElementById("d").value.substring(0,1)).toUpperCase());
        val += ((document.getElementById("e").value.substring(0,1)).toUpperCase());
        val += ((document.getElementById("f").value.substring(0,1)).toUpperCase());        //.substring(0,1) to take only first character from the string
        val += ((document.getElementById("g").value.substring(0,1)).toUpperCase());
        val += ((document.getElementById("h").value.substring(0,1)).toUpperCase());
        val += ((document.getElementById("i").value.substring(0,1)).toUpperCase());
        ftotalc = 20;
    }
    else if (v == 2) {
        totalc = 26;                                                                            //total credits in a semester
        var regc = { math: 4, chm: 4, eme: 4, eng: 3, est: 2, be: 2, mp: 3, engl: 2, chml: 1, bel: 1 };       //registered credits in a semester
        n = 10;                                                                                      //no. of subjects

        var i = 0, j = 10;
        for (x in regc) {
            while (j >= 5)
                s1.push(regc[x] * j--);
            j = 10;
        }
        val += ((document.getElementById("a2").value).toUpperCase());                                        //ASCII value s==83
        val += ((document.getElementById("b2").value).toUpperCase());
        val += ((document.getElementById("c2").value).toUpperCase());
        val += ((document.getElementById("d2").value).toUpperCase());
        val += ((document.getElementById("e2").value).toUpperCase());
        val += ((document.getElementById("f2").value).toUpperCase());
        val += ((document.getElementById("g2").value).toUpperCase());
        val += ((document.getElementById("h2").value).toUpperCase());
        val += ((document.getElementById("i2").value).toUpperCase());
        val += ((document.getElementById("j2").value).toUpperCase());
        ftotalc = 46;
        fobtc += document.getElementById("sg12").value * 20;                                             //calcualte sgpa*credits_of_previous_sems

    }
    else if (v == 3) {
        totalc = 27;                                                                            //total credits in a semester
        var regc = { math2: 4, asn: 4, edc: 4, de: 4, css: 4, oops: 3, oopsl: 1, asnl: 1, edcl: 1, del: 1 };       //registered credits in a semester
        n = 10;                                                                                      //no. of subjects

        var i = 0, j = 10;
        for (x in regc) {
            while (j >= 5)
                s1.push(regc[x] * j--);
            j = 10;
        }
        val += ((document.getElementById("a3").value).toUpperCase());                                        //ASCII value s==83
        val += ((document.getElementById("b3").value).toUpperCase());
        val += ((document.getElementById("c3").value).toUpperCase());
        val += ((document.getElementById("d3").value).toUpperCase());
        val += ((document.getElementById("e3").value).toUpperCase());
        val += ((document.getElementById("f3").value).toUpperCase());
        val += ((document.getElementById("g3").value).toUpperCase());
        val += ((document.getElementById("h3").value).toUpperCase());
        val += ((document.getElementById("i3").value).toUpperCase());
        val += ((document.getElementById("j3").value).toUpperCase());
        ftotalc = 73;
        fobtc += document.getElementById("sg13").value * 20;
        fobtc += document.getElementById("sg23").value * 26;

    }
    else if (v == 4) {
        totalc = 25;                                                                            //total credits in a semester
        var regc = { math3: 4, aic: 4, acs: 4, dsa: 2, emi: 3, emft: 4, emil: 1, dsal: 1, acsl: 1, aicl: 1 };       //registered credits in a semester
        n = 10;                                                                                      //no. of subjects

        var i = 0, j = 10;
        for (x in regc) {
            while (j >= 5)
                s1.push(regc[x] * j--);
            j = 10;
        }
        val += ((document.getElementById("a4").value).toUpperCase());                                        //ASCII value s==83
        val += ((document.getElementById("b4").value).toUpperCase());
        val += ((document.getElementById("c4").value).toUpperCase());
        val += ((document.getElementById("d4").value).toUpperCase());
        val += ((document.getElementById("e4").value).toUpperCase());
        val += ((document.getElementById("f4").value).toUpperCase());
        val += ((document.getElementById("g4").value).toUpperCase());
        val += ((document.getElementById("h4").value).toUpperCase());
        val += ((document.getElementById("i4").value).toUpperCase());
        val += ((document.getElementById("j4").value).toUpperCase());
        ftotalc = 98;
        fobtc += document.getElementById("sg14").value * 20;
        fobtc += document.getElementById("sg24").value * 26;
        fobtc += document.getElementById("sg34").value * 27;

    }
    else if (v == 5) {
        totalc = 25;                                                                            //total credits in a semester
        var regc = { mp: 4, vlsi: 4, hrm: 3, ms: 3, ce: 3, os: 3, mpl: 1, matlab: 1, osl: 1, indutrain: 2 };       //registered credits in a semester
        n = 10;                                                                                      //no. of subjects

        var i = 0, j = 10;
        for (x in regc) {
            while (j >= 5)
                s1.push(regc[x] * j--);
            j = 10;
        }
        val += ((document.getElementById("a5").value).toUpperCase());                                        //ASCII value s==83
        val += ((document.getElementById("b5").value).toUpperCase());
        val += ((document.getElementById("c5").value).toUpperCase());
        val += ((document.getElementById("d5").value).toUpperCase());
        val += ((document.getElementById("e5").value).toUpperCase());
        val += ((document.getElementById("f5").value).toUpperCase());
        val += ((document.getElementById("g5").value).toUpperCase());
        val += ((document.getElementById("h5").value).toUpperCase());
        val += ((document.getElementById("i5").value).toUpperCase());
        val += ((document.getElementById("j5").value).toUpperCase());
        ftotalc = 123;
        fobtc += document.getElementById("sg15").value * 20;
        fobtc += document.getElementById("sg25").value * 26;
        fobtc += document.getElementById("sg35").value * 27;
        fobtc += document.getElementById("sg45").value * 25;

    }
    else if (v == 6) {
        totalc = 23;                                                                            //total credits in a semester
        var regc = { dsd: 4, dcs: 4, dsp: 4, mpmc: 4, eco: 3, dsdl: 1, dcsl: 1, dspl: 1, mpmcl: 1 };       //registered credits in a semester
        n = 9;                                                                                      //no. of subjects

        var i = 0, j = 10;
        for (x in regc) {
            while (j >= 5)
                s1.push(regc[x] * j--);
            j = 10;
        }
        val += ((document.getElementById("a6").value).toUpperCase());                                        //ASCII value s==83
        val += ((document.getElementById("b6").value).toUpperCase());
        val += ((document.getElementById("c6").value).toUpperCase());
        val += ((document.getElementById("d6").value).toUpperCase());
        val += ((document.getElementById("e6").value).toUpperCase());
        val += ((document.getElementById("f6").value).toUpperCase());
        val += ((document.getElementById("g6").value).toUpperCase());
        val += ((document.getElementById("h6").value).toUpperCase());
        val += ((document.getElementById("i6").value).toUpperCase());
        ftotalc = 146;
        fobtc += document.getElementById("sg16").value * 20;
        fobtc += document.getElementById("sg26").value * 26;
        fobtc += document.getElementById("sg36").value * 27;
        fobtc += document.getElementById("sg46").value * 25;
        fobtc += document.getElementById("sg56").value * 25;



    }
    else if (v == 7) {
        totalc = 25;                                                                            //total credits in a semester
        var regc = { me: 4, bio: 4, de1: 3, de2: 3, oe1: 3, mel: 1, biol: 1, industrain: 4, project1: 2 };       //registered credits in a semester
        n = 9;                                                                                      //no. of subjects

        var i = 0, j = 10;
        for (x in regc) {
            while (j >= 5)
                s1.push(regc[x] * j--);
            j = 10;
        }
        val += ((document.getElementById("a7").value).toUpperCase());                                        //ASCII value s==83
        val += ((document.getElementById("b7").value).toUpperCase());
        val += ((document.getElementById("c7").value).toUpperCase());
        val += ((document.getElementById("d7").value).toUpperCase());
        val += ((document.getElementById("e7").value).toUpperCase());
        val += ((document.getElementById("f7").value).toUpperCase());
        val += ((document.getElementById("g7").value).toUpperCase());
        val += ((document.getElementById("h7").value).toUpperCase());
        val += ((document.getElementById("i7").value).toUpperCase());
        ftotalc = 171;
        fobtc += document.getElementById("sg17").value * 20;
        fobtc += document.getElementById("sg27").value * 26;
        fobtc += document.getElementById("sg37").value * 27;
        fobtc += document.getElementById("sg47").value * 25;
        fobtc += document.getElementById("sg57").value * 25;
        fobtc += document.getElementById("sg67").value * 23;


    }
    else if (v == 8) {
        totalc = 19;                                                                            //total credits in a semester
        var regc = { acs: 3, me: 3, de3: 3, de4: 3, oe2: 3, project2: 4 };       //registered credits in a semester
        n = 6;                                                                                      //no. of subjects

        var i = 0, j = 10;
        for (x in regc) {
            while (j >= 5)
                s1.push(regc[x] * j--);
            j = 10;
        }
        val += ((document.getElementById("a8").value).toUpperCase());                                        //ASCII value s==83
        val += ((document.getElementById("b8").value).toUpperCase());
        val += ((document.getElementById("c8").value).toUpperCase());
        val += ((document.getElementById("d8").value).toUpperCase());
        val += ((document.getElementById("e8").value).toUpperCase());
        val += ((document.getElementById("f8").value).toUpperCase());
        ftotalc = 190;
        fobtc += document.getElementById("sg18").value * 20;
        fobtc += document.getElementById("sg28").value * 26;
        fobtc += document.getElementById("sg38").value * 27;
        fobtc += document.getElementById("sg48").value * 25;
        fobtc += document.getElementById("sg58").value * 25;
        fobtc += document.getElementById("sg68").value * 23;
        fobtc += document.getElementById("sg78").value * 25;
    }
    var inc = 0;
    for (var i = 0; i < n; i++) {
        if (val.charCodeAt(i) == 83)
            obtc += s1[i * 6];
        else if (val.charCodeAt(i) >= 65 && val.charCodeAt(i) <= 69)
            obtc += s1[val.charCodeAt(i) + inc - 64];
        else { obtc = NaN; break; }
        inc += 6;
    }
    r.innerHTML = "Your SGPA is : " + (obtc / totalc).toPrecision(3) + '<br>' + '<br>';
    r.innerHTML += "Your CGPA is : " + ((fobtc + obtc) / ftotalc).toPrecision(3);
    if (isNaN(obtc / totalc) || isNaN(fobtc / ftotalc)) window.alert("1. You might have left a field blank\n\n2. You might have enterd invalid character.");

    document.getElementById("sgb").style.marginTop = "-5px";
}
