function displaySubCategory() {
    const areaType = document.getElementById('area').value;
    if (areaType === 'irrigated') {
      document.getElementById('irrigated-options').style.display = 'block';
      document.getElementById('rainfed-options').style.display = 'none';
    } else {
      document.getElementById('irrigated-options').style.display = 'none';
      document.getElementById('rainfed-options').style.display = 'block';
    }
  }
  
  function displayRainfallSubCategory() {
    const rainfallCategory = document.getElementById('rainfall').value;
    document.getElementById('low-rainfall').style.display = 'none';
    document.getElementById('medium-rainfall').style.display = 'none';
    document.getElementById('high-rainfall').style.display = 'none';
  
    if (rainfallCategory === 'low') {
      document.getElementById('low-rainfall').style.display = 'block';
    } else if (rainfallCategory === 'medium') {
      document.getElementById('medium-rainfall').style.display = 'block';
    } else {
      document.getElementById('high-rainfall').style.display = 'block';
    }
  }
  
  function calculateFertilizer() {
    const areaType = document.getElementById('area').value;
    const area = parseFloat(document.getElementById('area-size').value);
    if (isNaN(area) || area <= 0) {
      alert("Please enter a valid area in acres.");
      return;
    }
  
    let nAmount = 0, pAmount = 0, kAmount = 0;
    let dapAmount = 0, ureaAmount = 0, sopAmount = 0;
  
    // Calculate Total N, P, K for the selected area
    if (areaType === 'irrigated') {
      const soilType = document.getElementById('soil-type').value;
      if (soilType === 'low-fertile') {
        nAmount = 64;
        pAmount = 46;
        kAmount = 25;
      } else if (soilType === 'medium-fertile') {
        nAmount = 54;
        pAmount = 34;
        kAmount = 25;
      } else if (soilType === 'fertile') {
        nAmount = 48;
        pAmount = 34;
        kAmount = 25;
      }
    } else if (areaType === 'rainfed') {
      const rainfallCategory = document.getElementById('rainfall').value;
      if (rainfallCategory === 'low') {
        pAmount = 23;
        kAmount = 12;
        const region = document.getElementById('low-rainfall-region').value;
        nAmount = 32;
      } else if (rainfallCategory === 'medium') {
        pAmount = 28;
        kAmount = 12;
        const region = document.getElementById('medium-rainfall-region').value;
        nAmount = 40;
      } else if (rainfallCategory === 'high') {
        pAmount = 34;
        kAmount = 25;
        const region = document.getElementById('high-rainfall-region').value;
        nAmount = 48;
      }
    }
  
    // Display the total N, P, and K required per acre
    document.getElementById('n-amount').innerText = nAmount.toFixed(2);
    document.getElementById('p-amount').innerText = pAmount.toFixed(2);
    document.getElementById('k-amount').innerText = kAmount.toFixed(2);
  
    // Fertilizer calculations (DAP, Urea, SOP) per acre
    dapAmount = pAmount / 0.46; // DAP provides P and part of N
    ureaAmount = (nAmount - (dapAmount * 0.18)) / 0.46; // Remaining N from Urea
    sopAmount = kAmount / 0.5; // SOP provides K
  
    // Scale the fertilizer amounts based on the area
    dapAmount *= area;
    ureaAmount *= area;
    sopAmount *= area;
  
    // Display the fertilizer amounts for the given area
    document.getElementById('dap-amount').innerText = dapAmount.toFixed(2);
    document.getElementById('urea-amount').innerText = ureaAmount.toFixed(2);
    document.getElementById('sop-amount').innerText = sopAmount.toFixed(2);
  }
  