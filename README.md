




# Project K

A modern, full-stack social platform built with Next.js, TypeScript, Prisma, Clerk authentication, and Tailwind CSS. This project demonstrates best practices for building scalable, maintainable web applications using the latest features of the Next.js App Router.

---

## 🚀 Features

- **Next.js App Router**: File-based routing, layouts, and server components
- **TypeScript**: Type-safe codebase for reliability and maintainability
- **Prisma & Postgres**: Powerful ORM and relational database
- **Clerk Authentication**: Secure user authentication and authorization
- **Tailwind CSS & Shadcn UI**: Modern, customizable UI components
- **Server Actions & Route Handlers**: API endpoints and server-side logic
- **Optimistic UI Updates**: Fast, responsive user experience
- **File Uploads**: UploadThing integration for images
- **Notifications**: Real-time feedback for likes, comments, and follows
- **Dynamic & Static Routing**: Profile pages, tasks, and more
- **Error Handling**: Custom loading, error, and not-found pages

---

## �️ Tech Stack

- [Next.js 14+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Postgres](https://www.postgresql.org/)
- [Clerk](https://clerk.com/) (Authentication)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (UI components)
- [UploadThing](https://uploadthing.com/) (File uploads)

---

## � Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/project-k.git
cd project-k-official
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_postgres_connection_string
UPLOADTHING_TOKEN=your_uploadthing_token
```

### 4. Set up the database

Run Prisma migrations to set up your database schema:

```bash
npx prisma migrate dev --name init
```

### 5. Start the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📝 Project Structure

- `src/app/` - Main application pages, layouts, and API routes
- `src/components/` - Reusable UI components
- `src/actions/` - Server actions for data fetching and mutations
- `src/lib/` - Utility libraries (Prisma client, helpers)
- `prisma/` - Prisma schema and migrations
- `public/` - Static assets

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and submit a pull request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Clerk](https://clerk.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [UploadThing](https://uploadthing.com/)

---

_Built with ❤️ by Kapil Chaudhary_
