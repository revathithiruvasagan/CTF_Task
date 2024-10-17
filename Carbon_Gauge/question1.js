function getEmissionResults(
  machineRuntime,
  toolWeight,
  toolLife,
  materialWeight
) {
  const toolEmissions = (machineRuntime / toolLife) * toolWeight * 30;
  const materialEmissions = materialWeight * 2.5;
  return toolEmissions + materialEmissions;
}

const result = getEmissionResults(100, 50, 500, 200);
console.log("Total Emissions:", result);
