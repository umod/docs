---
hide_table_of_contents: true
---

# OnPlayerRevive

## Usage

* Called before the recover after reviving with a medical tool
* Useful for canceling the reviving
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnPlayerRevive(BasePlayer reviver, BasePlayer player)
{
    Puts($"{reviver.displayName} revived {player.displayName}");
    return null;
}
```
