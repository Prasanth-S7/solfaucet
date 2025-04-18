import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useWallet } from "@solana/wallet-adapter-react"
import { useConnection } from "@solana/wallet-adapter-react"
import { useState } from "react"
import { toast } from "sonner"
export const Hero = () => {
    
    const [amount, setAmount] = useState("")

    const wallet = useWallet()
    const { connection } = useConnection();

    const requestAirDrop = async () => {
        if(wallet.publicKey == null){
            toast.error("Please connect your wallet")
            return
        }
        if(amount == ""){
            toast.error("Please enter the amount")
            return
        }
        const res = await connection.requestAirdrop(wallet.publicKey, Number(amount) * 1000000000)
        if(res){
            toast.success("Airdrop successful")
        }
        else{
            toast.error("Airdrop failed")
        }
    }
    return(
        <div className="flex items-center h-[calc(100vh-128px)] text-white justify-center w-full font-primary">
            <div className="flex space-x-2 justify-center items-center w-2xl">
                <Input type="number"  className="h-14" placeholder="Enter the amount of SOL" onChange = {(e) => setAmount(e.target.value)}></Input>
                <Button className="hover:cursor-pointer h-14" onClick = {requestAirDrop}>Request Airdrop</Button>
            </div>
        </div>
    )
}