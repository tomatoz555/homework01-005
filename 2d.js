import { getContext, FPS } from "./utils-module.js";

// กำหนดชื่อเรื่องของเอกสาร HTML
document.title = "A01 - App Graphics 2D";
// กำหนดให้ฟังก์ชัน main ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
document.addEventListener("DOMContentLoaded", main);

// ฟังก์ชันหลักที่ใช้ในการเริ่มต้นแอปพลิเคชัน ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
function main(ev) {
	// เข้าถึง context ของ canvas ที่มี id เป็น "myCanvas"
	const ctx = getContext("#myCanvas");

	// กำหนดค่าเริ่มต้นสำหรับแอปพลิเคชันในรูปแบบของอ็อบเจกต์ config
	const config = {
		width : 800,
		height : 600,
		bgColor : "skyblue",
		debug : true,
	};

	// กำหนดขนาดของ canvas ตามค่า config
	ctx.canvas.width = config.width;
	ctx.canvas.height = config.height;

	function draw() {
		// ใช้ FPS สำหรับการวัดอัตราเฟรมต่อวินาที
		FPS.update();

		// กำหนดสีพื้นหลังของ canvas และใช้ fillRect เพื่อเติมสีพื้นหลัง
		ctx.fillStyle = config.bgColor;
		ctx.fillRect(0, 0, config.width, config.height);

		// วาดรูปจากส่วนนี้ไป **แนะนำให้วาดจากรูปที่อยู่ด้านหลังไปด้านหน้าตามลำดับ**
		// ใช้ภาพจาก MP1-app-graphics-2d.jpg เป็นแนวทางในการวาดรูป แต่จะวาดอย่างไรก็ได้ตามต้องการ

		// TODO:
		


		let angle = 51;
		for (let i=0;i<7;i++){

		ctx.translate(400, 110);
		ctx.rotate((angle * Math.PI) / 180);		// แสงออร่าของพระอาทิตย์
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.moveTo(-26, -55);
		ctx.quadraticCurveTo(0, -40, 19, -55);
		ctx.lineTo(0, 0);
		ctx.fillStyle = "rgba(189, 202, 9, 0.44)";
		ctx.fill();
		ctx.stroke();
		ctx.setTransform(1, 0, 0, 1, 0, 0); //กลับไปเป็นค่าเริ่มต้น
		angle+=51;
		}


		ctx.beginPath();
		ctx.arc(400, 110, 37, 0, 2 * Math.PI);			//พระอาทิตย์
		ctx.fillStyle = "rgba(224, 231, 15, 1)";
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(30, 300);
		ctx.bezierCurveTo(500, 50, 600, 320, 800, 200);		//ภูเขาขวา
		ctx.lineTo(800, 300);
		ctx.lineTo(350, 300);
		ctx.fillStyle = "rgba(42, 171, 10, 1)";
		ctx.fill();
		ctx.stroke();


		ctx.beginPath();
		ctx.moveTo(0, 200);
		ctx.quadraticCurveTo(250, 170, 400, 300);		//ภูเขาซ้าย
		ctx.lineTo(0, 300);
		ctx.lineTo(0, 200);
		ctx.fillStyle = "rgba(42, 171, 10, 1)";
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.bezierCurveTo(250, 500, 450, 450, 300, 600);	//พื้นดินฝั่งซ้าย
		ctx.lineTo(0, 600);
		ctx.lineTo(0, 300);
		ctx.fillStyle = "rgba(46, 139, 23, 1)";
		ctx.fill();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(450, 300);
		ctx.bezierCurveTo(400, 500, 600, 450, 450, 600);	//พื้นดินฝั่งขวา
		ctx.lineTo(800, 600);
		ctx.lineTo(800, 300);
		ctx.lineTo(450, 300);
		ctx.fillStyle = "rgba(46, 139, 23, 1)";
		ctx.fill();
		ctx.stroke();


// ...existing code...

        // วาดหญ้าเรียงเป็นแถวทางฝั่งต้นไม้ 
        const grassPositions = [];
        // กำหนดให้หญ้าอยู่แถวๆ x: 60 ถึง 220, y: 570
        for (let row = 0; row < 6; row++) {
            let y = 570 - row * 15;
            for (let x = 60 ; x <= 220 ; x += 12) {
                grassPositions.push({ x: x, y: y });
            }
        }

        grassPositions.forEach(pos => {
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            ctx.lineTo(pos.x, pos.y - 25); // ก้านหญ้า
            ctx.moveTo(pos.x, pos.y - 10);
            ctx.lineTo(pos.x - 5, pos.y - 15); // ใบซ้าย
            ctx.moveTo(pos.x, pos.y - 10);
            ctx.lineTo(pos.x + 5, pos.y - 15); // ใบขวา
            ctx.stroke();
        });

// ...existing code...



		ctx.translate(360, 340);							//คลื่นน้ำไหล
		ctx.beginPath();
		ctx.moveTo(-50, 0);
		ctx.bezierCurveTo(-25, -20, 25, 20, 50, 0);
		ctx.stroke();
		ctx.setTransform(1, 0, 0, 1, 0, 0); //กลับไปเป็นค่าเริ่มต้น

		ctx.translate(400, 450);
		ctx.beginPath();
		ctx.moveTo(-50, 0);
		ctx.bezierCurveTo(-25, -20, 25, 20, 50, 0);
		ctx.stroke();
		ctx.setTransform(1, 0, 0, 1, 0, 0); //กลับไปเป็นค่าเริ่มต้น

		ctx.translate(400, 580);
		ctx.beginPath();
		ctx.moveTo(-50, 0);
		ctx.bezierCurveTo(-25, -20, 25, 20, 50, 0);
		ctx.stroke();
		ctx.setTransform(1, 0, 0, 1, 0, 0); //กลับไปเป็นค่าเริ่มต้น




		ctx.beginPath();		//ตัวบ้าน
		ctx.moveTo(600,420);
		ctx.lineTo(600, 500);
		ctx.lineTo(700, 500);
		ctx.lineTo(700, 420);
		ctx.lineTo(650, 380);
		ctx.lineTo(600,420);
		ctx.fillStyle = "rgba(107, 88, 25, 1)";
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();		//หลังคาซ้าย
		ctx.moveTo(650, 350);
		ctx.lineTo(580,410);
		ctx.lineTo(600,420);
		ctx.lineTo(650, 380);
		ctx.lineTo(650, 350);
		ctx.fillStyle = "rgba(107, 88, 25, 1)";
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();		//หลังคาขวา
		ctx.moveTo(650, 350);
		ctx.lineTo(720, 410);
		ctx.lineTo(700, 420);
		ctx.lineTo(650, 380);
		ctx.lineTo(650, 350);
		ctx.fillStyle = "rgba(101, 89, 30, 1)";
		ctx.fill();
		ctx.stroke();

		ctx.fillStyle = "black";		//ประตู
		ctx.fillRect(640,451, 20,50);

		ctx.fillStyle = "black";		//เสาขวา
		ctx.fillRect(695,500, 5,30);

		ctx.fillStyle = "black";		//เสาซ้าย
		ctx.fillRect(600, 500, 5,30);



		//ต้นไม้
		ctx.translate(200, 450);

		ctx.beginPath();
		ctx.moveTo(-25, -20);
		ctx.quadraticCurveTo(0, 0, -25, 20);		//ลำต้น
		ctx.lineTo(25, 20);
		ctx.quadraticCurveTo(0, 0, 25, -20);
		ctx.lineTo(-25, -20);
		ctx.fillStyle = "rgba(255, 0, 0, 0.44)";
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();		//ใบ
		ctx.moveTo(25, -20);
		ctx.quadraticCurveTo(85, -80, 25, -70);
		ctx.quadraticCurveTo(55, -100, 25, -100);
		ctx.quadraticCurveTo(50, -140, 0, -120);
		ctx.quadraticCurveTo(-30, -140, -25, -120);
		ctx.quadraticCurveTo(-85, -70, -25, -70);
		ctx.quadraticCurveTo(-95, -70, -25, -20);
		ctx.fillStyle = "rgba(68, 255, 0, 0.44)";
		ctx.fill();
		ctx.stroke();

		ctx.setTransform(1, 0, 0, 1, 0, 0);


		const grad = ctx.createLinearGradient(300, 0, 540, 0); //สีของสะพาน
		grad.addColorStop(0, "#ba5353ff");  
		
		ctx.beginPath();
		ctx.moveTo(540, 560);
		ctx.quadraticCurveTo(400, 500, 300, 560);		//วาดสะพาน
		ctx.lineTo(320, 480);
		ctx.quadraticCurveTo(400, 450, 540, 500);
		ctx.lineTo(540, 560);
		ctx.fillStyle = grad;
		ctx.fill();
		ctx.stroke();




		//ฝน
		let xx = 0;
		let yy = 0;
		for (let i=0;i<10;i++){
		xx = Math.random() * 800;
		yy = Math.random() * 600;
		ctx.beginPath();
		ctx.translate(xx, yy);
		ctx.moveTo(0, 0);
		ctx.lineTo(10, -15);
		ctx.stroke();
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		}


		//นก
		ctx.translate(300, 150);
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.quadraticCurveTo(-4, -2, -8, 0);
		ctx.moveTo(0, 0);
		ctx.quadraticCurveTo(-4, -2, 8, 0);
		ctx.stroke();
		ctx.setTransform(1, 0, 0, 1, 0, 0);


		ctx.translate(540, 130);
		ctx.beginPath();		//เมฆ
			ctx.rotate((90 * Math.PI) / 180);
		ctx.moveTo(25, -20);
		ctx.quadraticCurveTo(45, -40, 25, -70);
		ctx.quadraticCurveTo(5, -80, 25, -90);
		ctx.quadraticCurveTo(40, -130, 0, -120);
		ctx.quadraticCurveTo(-10, -130, -25, -120);
		ctx.quadraticCurveTo(-55, -80, -25, -70);
		ctx.quadraticCurveTo(-55, -40, -25, -20);
		ctx.quadraticCurveTo(0, 40,25, -20);
		ctx.fillStyle = "rgba(218, 218, 205, 0.44)";
		ctx.fill();
		ctx.stroke();
		ctx.setTransform(1, 0, 0, 1, 0, 0);

		ctx.translate(180, 130);
		ctx.beginPath();		//เมฆ
		ctx.rotate((270 * Math.PI) / 180);
		ctx.moveTo(25, -20);
		ctx.quadraticCurveTo(45, -40, 25, -70);
		ctx.quadraticCurveTo(45, -80, 25, -100);
		ctx.quadraticCurveTo(40, -130, 0, -120);
		ctx.quadraticCurveTo(-20, -130, -25, -120);
		ctx.quadraticCurveTo(-45, -80, -25, -70);
		ctx.quadraticCurveTo(-45, -40, -25, -20);
		ctx.quadraticCurveTo(0, 40,25, -20);
		ctx.fillStyle = "rgba(213, 213, 179, 0.44)";
		ctx.fill();
		ctx.stroke();
		ctx.setTransform(1, 0, 0, 1, 0, 0);
	


		// เขตสิ้นสุดของการวาดรูป


		// แสดงข้อความ FPS บน canvas ถ้า config.debug เป็น true
		if (config.debug) FPS.show(ctx, 10, 28);

		// ใช้ requestAnimationFrame เพื่อเรียกใช้ฟังก์ชัน draw ต่อไป
		requestAnimationFrame(draw);
	}
	// เริ่มต้นการวาดภาพบน canvas
	draw();
}