---
hide_table_of_contents: true
---

# OnPlayerRevive

## Usage

* Called before the recover after reviving with a medical tool
* Useful for canceling the reviving
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPlayerRevive(BasePlayer reviver, BasePlayer player)
{
    Puts($"{reviver.displayName} revived {player.displayName}");
    return null;
}
```
