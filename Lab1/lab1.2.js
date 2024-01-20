// 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi
const Goal1= "Lewandowski";

for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
  }
  
  // 2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console
  let averageOdds = 0;
  for (let odd of Object.values(game.odds)) {
    averageOdds += odd;
  }
  averageOdds /= Object.values(game.odds).length;
  console.log(`Average odds: ${averageOdds}`);
  
  // 3. Print the 3 odds to the console, but in a nice formatted way
  for (let [team, odd] of Object.entries(game.odds)) {
    console.log(`Tỉ lệ thắng của ${game[team]}: ${odd}`);
  }
  
  // Thêm: Tạo ra 1 đối tượng là 'scorers', đối tượng này gồm các thuộc tính với key là tên cầu thủ đã ghi bàn, value là số bàn thắng đã ghi.
  let scorers = {};
  for (let player of game.scored) {
    scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
  }
  console.log(scorers);
  