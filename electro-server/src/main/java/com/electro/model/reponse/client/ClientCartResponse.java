package com.electro.model.reponse.client;

import lombok.Data;

import java.util.Set;

@Data
public class ClientCartResponse {
    private Long cartId;
    private Set<ClientCartVariantResponse> cartItems;
}
