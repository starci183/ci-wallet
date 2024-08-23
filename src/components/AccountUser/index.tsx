"use client"

import { StoredAccount, setActiveAccountNumber, useAppDispatch, useAppSelector } from "@/redux"
import { createAptosAccount, createSolanaAccount } from "@/services"
import { formatAddress } from "@/utils"
import { Card, CardBody, User, CheckboxIcon } from "@nextui-org/react"
import React from "react"

interface AccountUserProps {
    account: StoredAccount
    accountNumber: number
    activeAccountNumber: number
}

export const AccountUser = ({account: { imageUrl, name }, activeAccountNumber, accountNumber}: AccountUserProps) => {
    const mnemonic = useAppSelector(state => state.authReducer.mnemonic)
    const preferenceChainKey = useAppSelector(state => state.chainReducer.preferenceChainKey)
    const dispatch = useAppDispatch()

    const { accountAddress } = createAptosAccount({
        accountNumber,
        mnemonic
    })

    const { publicKey } = createSolanaAccount({
        accountNumber,
        mnemonic
    })
    
    const map: Record<string, string> = {
        "aptos": accountAddress.toString(),
        "solana": publicKey.toString() ?? ""
    }

    return (
        <Card classNames={{
            base: "!bg-transparent"
        }} disableRipple isPressable onPress={() => dispatch(setActiveAccountNumber({
            accountNumber,
            preferenceChainKey
        }))} fullWidth shadow="none">
            <CardBody className="px-3 py-2">
                <div className="flex justify-between items-center w-full">
                    <User
                        avatarProps={{
                            src: imageUrl
                        }}
                        name={
                            <div className="flex gap-1 text-sm items-center">
                                <div>{name}</div>
                                <div className="text-primary">{`[${accountNumber}]`}</div>
                            </div>
                        }
                        description={
                            formatAddress(map[preferenceChainKey])
                        }/>
                    <CheckboxIcon isSelected={activeAccountNumber === accountNumber} className="w-3"/>
                </div>   
            </CardBody>
        </Card>
    )
}