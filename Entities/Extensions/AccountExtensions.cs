using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Extensions
{
    public static class AccountExtensions
    {
        public static void Map(this Account dbAccount, Account account)
        {
            dbAccount.DateCreated = account.DateCreated;
            dbAccount.AccountType = account.AccountType;
        }
    }
}
