---
hide_table_of_contents: true
---

# OnPlayerTick

## Usage

* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPlayerTick(BasePlayer player, PlayerTick msg, bool wasPlayerStalled)
{
    Puts("OnPlayerTick works!");
    return null;
}
```
