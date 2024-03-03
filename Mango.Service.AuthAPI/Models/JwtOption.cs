﻿using Microsoft.IdentityModel.Tokens;

namespace Mango.Service.AuthAPI.Models
{
    public class JwtOption
    {
        public string Issuer { get; set; } =string.Empty;
        public string Audience {  get; set; }=string.Empty;
        public string Secret { get; set; } = string.Empty;

    }
}
