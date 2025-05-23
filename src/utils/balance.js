export async function getEthBalance(address) {
  console.log('Mocking ETH balance for:', address);
  await new Promise(resolve => setTimeout(resolve, 500));
  return "0.015 ETH";
}
