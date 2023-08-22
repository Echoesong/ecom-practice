import { Button } from "@mui/material";

function MyComponent() {
  return (
    <Button variant="contained" color="primary">
      Click me
    </Button>
  );
}


export default function Home(){
    return(
        <>
            <div>This is the Home page</div>
            <MyComponent/>
            <MyComponent/>

            
        </>
    )
}