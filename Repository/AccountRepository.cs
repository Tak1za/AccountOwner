using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entities.ExtendedModels;
using Entities.Extensions;

namespace Repository
{
    public class AccountRepository : RepositoryBase<Account>, IAccountRepository
    {
        public AccountRepository(RepositoryContext repositoryContext): base(repositoryContext)
        {

        }

        public IEnumerable<Account> AccountsByOwner(Guid ownerId)
        {
            return FindByCondition(a => a.OwnerId.Equals(ownerId)).ToList();
        }

        public void CreateAccount(Account account)
        {
            account.Id = Guid.NewGuid();
            Create(account);
        }

        public Account GetAccountById(Guid accountId)
        {
            return FindByCondition(acc => acc.Id.Equals(accountId)).DefaultIfEmpty(new Account()).FirstOrDefault();
        }

        public IEnumerable<Account> GetAllAccounts()
        {
            return FindAll().OrderBy(acc => acc.DateCreated).ToList();
        }

        public void UpdateAccount(Account dbAccount, Account account)
        {
            dbAccount.Map(account);
            Update(dbAccount);
        }

        public void DeleteAccount(Account account)
        {
            Delete(account);
        }
    }
}
