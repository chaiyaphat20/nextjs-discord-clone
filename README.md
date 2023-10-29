# REF https://www.youtube.com/watch?v=ZbX4Ok9YX94&t=41734s

# 1. Install shadcn-ui

```
$ npx shadcn-ui@latest init

Link https://ui.shadcn.com/docs/installation/next
เลือก style -> default
เลือก base color-> stone
เลือก global css -> src/app/global.css
เลือก css variables -> yes
เลือก tailwind located -> enter
เลือก alias component -> enter
เลือก alias utils -> enter
เลือก react server components -> yes
เลือก components.json -> Y
```

# 2.Page not found

```
https://github.com/shadcn-ui/ui/issues/755
1.เอา file ที่ app/global.css มาทับที่ file src/app/global.css
2.แก้ components.json
- "css": "app/globals.css",
+ "css": "scr/app/globals.css",
3.npm run dev
```

# 3.setting global.css

```
html,
body,
:root {  /*:root เป็น pseudo-class */
  height: 100%;
}
```

# 4.setting husky prettier

# 5.config clerk

```
https://dashboard.clerk.com/
0.add gitignore.json  .env
1.crate .env

https://clerk.com/docs/quickstarts/nextjs
1.npm install @clerk/nextjs

```

# 6.set dark theme

```
npm install next-themes
npx shadcn-ui@latest add dropdown-menu
```

# 7.install prisma

```
npm i -D prisma
npx prisma init

1.Sequelize
2.typeorm
3.Prisma
ทั้ง 3 ตัว คือ ตัวจัดการ DB ซึ่งเขียนในรูปแบบ ORM
ช่วยจัดการ ฐานข้อมูลให้ เช่น
nestjs ใช้ typeorm รองรับทั้ง TS,JS
express ใช้ sequelize รองรับทั้ง TS,JS
nextjs ใช้ primas น่าจะใช้ง่ายสุด ข้อดีคือใช้ กับ GraphQL ได้ รองรับทั้ง TS,JS

ภาษาอื่นเช่น
1. Go ใช้ gorm จัดการ db ในรูปแบบ ORM
2. c# (.Net Framework ) ก็เช่น Entity Framework (EF) หรือ Dapper จัดการ db ในรูปแบบ ORM
3. TS,JS (Sequelize,typeorm,Prisma)

ORM คือ object Relational Mapping ใช้เปลงข้อมูลในDB เป็น Object และ แปลง Object เป็น ข้อมูลใน DB  โดยไม่ต้องใช้ SQL โดยตรง
```

# 8.
