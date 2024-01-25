import { Button } from "@nextui-org/react"

export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl text-center">404</h1>
      <h2 className="text-2xl text-center">Page not found</h2>
      <Button
        className="mt-5"
        onClick={() => window.location.replace("/")}
        color="primary"
      >
        Go back home
      </Button>
    </div>
  )
}
