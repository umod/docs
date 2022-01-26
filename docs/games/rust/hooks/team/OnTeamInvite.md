---
hide_table_of_contents: true
---

# OnTeamInvite

## Usage

* Useful for canceling an invitation
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnTeamInvite(BasePlayer inviter, BasePlayer target)
{
    Puts($"{inviter.displayName} invited {target.displayName} to his team");
    return null;
}
```
