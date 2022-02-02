---
hide_table_of_contents: true
---

# OnPlayerAssist

## Usage

* Called when a player tries to assist target player (when target is wounded)
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPlayerAssist(BasePlayer target, BasePlayer player)
{
    Puts("OnPlayerAssist works!");
    return null;
}
```
