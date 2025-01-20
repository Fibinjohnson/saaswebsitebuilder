import { clerkMiddleware , createRouteMatcher} from "@clerk/nextjs/server";

// Define public routes

const isPublicRoute = createRouteMatcher(['/auth/uploadthing', '/site']);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {await auth.protect()}
})

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run middleware for API routes
    '/(api|trpc)(.*)',
  ],
};
