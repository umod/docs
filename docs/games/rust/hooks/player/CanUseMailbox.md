---
hide_table_of_contents: true
---

# CanUseMailbox

## Usage

* Called when the player tries to use a mailbox
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanUseMailbox(BasePlayer player, Mailbox mailbox)
{
    Puts("CanUseMailbox works!");
    return true;
}
```
