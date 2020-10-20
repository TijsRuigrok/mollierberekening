window.onload = function(){

    const T1_INPUT = document.getElementById('js--T1-input');
    const RV_INPUT = document.getElementById('js--RV-input');
    const SUBMIT1 = document.getElementById('js--submit1');
    const DP1_OUTPUT = document.getElementById('js--DP1-output');
    const ABS_OUTPUT = document.getElementById('js--ABS-output');

    const T2_INPUT = document.getElementById('js--T2-input');
    const ABS_INPUT = document.getElementById('js--ABS-input');
    const SUBMIT2 = document.getElementById('js--submit2');
    const RV_OUTPUT = document.getElementById('js--RV-output');
    const DP2_OUTPUT = document.getElementById('js--DP2-output')

    const C1 = 0.02064;
    const C2 = 0.99885;
    const C3 = 15.656;
    const C4 = 4.0413;
    const C5 = 0.0638;

    function calculateDPFromRV(T, RV){
        return C1 + C2*T + C3*Math.log(RV/100);
    }

    function calculateABSFromRV(T, RV){
        return C4*Math.exp(C5*T)*RV/100;
    }

    SUBMIT1.onclick = function (){
        DP1_OUTPUT.innerHTML = calculateDPFromRV(T1_INPUT.value, RV_INPUT.value);
        ABS_OUTPUT.innerHTML = calculateABSFromRV(T1_INPUT.value, RV_INPUT.value);
    }

    function calculateRVFromABS(T, ABS){
        return (100*ABS)/(C4*Math.exp(C5*T));
    }

    function calculateDPFromABS(T, ABS){
        return C1+(C2-C3*C5)*T+C3*Math.log(ABS/C4);
    }

    SUBMIT2.onclick = function (){
        RV_OUTPUT.innerHTML = calculateRVFromABS(T2_INPUT.value, ABS_INPUT.value);
        DP2_OUTPUT.innerHTML = calculateDPFromABS(T2_INPUT.value, ABS_INPUT.value);
    }

}