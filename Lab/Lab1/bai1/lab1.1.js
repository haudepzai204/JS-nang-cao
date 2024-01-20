// 1. Tạo ra 1 mảng cầu thủ cho mỗi đội
let players1 = ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'];
let players2 = ['Oblak', 'Trippier', 'Savic', 'Felipe', 'Lodi', 'Koke', 'Partey', 'Niguez', 'Carrasco', 'Morata', 'Costa'];

// 2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở các vị trí khác
let gk = players1[0];
let fieldPlayers = players1.slice(1);

// 3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
let allPlayers = ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski','Oblak', 'Trippier', 'Savic', 'Felipe', 'Lodi', 'Koke', 'Partey', 'Niguez', 'Carrasco', 'Morata', 'Costa'];

// 4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu
let gameOdds = {team1: 1.33, draw: 3.25, team2: 6.5};

// 6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
function printGoals(...players) {
  console.log(`${players.join(', ')} scored a goal`);
  console.log(`Total goals: ${players.length}`);
}

// Test the function with players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// 7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng
let team = Object.keys(gameOdds).reduce((a, b) => gameOdds[a] < gameOdds[b] ? a : b);

console.log(team);




