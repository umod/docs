---
hide_table_of_contents: true
---

# OnPlayerTick

## Usage

* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPlayerTick(BasePlayer player, PlayerTick msg, bool wasPlayerStalled)
{
    Puts("OnPlayerTick works!");
    return null;
}
```
