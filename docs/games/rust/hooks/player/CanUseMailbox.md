---
hide_table_of_contents: true
---

# CanUseMailbox

## Usage

* Called when the player tries to use a mailbox
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanUseMailbox(BasePlayer player, Mailbox mailbox)
{
    Puts("CanUseMailbox works!");
    return null;
}
```
