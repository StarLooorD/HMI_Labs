function change_text() {
    let text = document.getElementById('trial_text')
    if (text.innerText === 'Trial version') {
        document.getElementById('trial_text').innerHTML = 'Premium';
        alert('You have successfully upgraded!');
    }
    else {
        alert('You are already upgraded to premium!');
    }
}