import React from "react"
import { InviteModal } from "./InviteModal"
import { AccountsModal } from "./AccountsModal"
import { BridgeSelectTokenModal } from "./BridgeSelectTokenModal"
import { SelectNetworkModal } from "./SelectNetworkModal"
import { CreateAccountModal } from "./CreateAccountModal"
import { BridgeSelectRecipientModal } from "./BridgeSelectRecipientModal"
import { BridgeTransferResultModal } from "./BridgeTransferResultModal"
import { BridgeRedeemResultModal } from "./BridgeRedeemResultModal"
import { BridgeSelectVaaModal } from "./BridgeSelectVaaModal"
import { ErrorModal } from "./ErrorModal"

export const Modals = () => {
    return (
        <div>
            <InviteModal />
            <AccountsModal />
            <BridgeSelectTokenModal />
            <SelectNetworkModal />
            <CreateAccountModal />
            <BridgeSelectRecipientModal />
            <BridgeTransferResultModal />
            <BridgeRedeemResultModal />
            <BridgeSelectVaaModal />
            <ErrorModal />
        </div>
    )
}
