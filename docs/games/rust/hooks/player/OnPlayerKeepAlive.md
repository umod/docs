---
hide_table_of_contents: true
---

# OnPlayerKeepAlive

## Usage

* Called before a player is kept alive (Example: You started "helping" player, it keeps him alive for at least 10 seconds more to be sure he won't die until you finish picking him up)
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPlayerKeepAlive(BasePlayer player, BasePlayer target)
{
    Puts("OnPlayerKeepAlive works!");
    return null;
}
```
