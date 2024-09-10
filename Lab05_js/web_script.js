function calculate() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const hourlySalary = parseFloat(document.getElementById('hourlySalary').value);
    const hours = document.getElementsByName('hours[]');


    for (let i = 0; i < hours.length; i++) {
        if (hours[i].value > 8) {
            alert('จำนวนชั่วโมงทำงานต่อวันต้องไม่เกิน 8 ชั่วโมง');
            return;
        }
    }


    let totalHours = 0;
    for (let i = 0; i < hours.length; i++) {
        totalHours += parseFloat(hours[i].value) || 0;
    }
    const weeklyEarnings = totalHours * hourlySalary;


    document.getElementById('fullName').textContent = firstName + ' ' + lastName;
    document.getElementById('weeklyEarnings').textContent = weeklyEarnings.toFixed(2);
}
