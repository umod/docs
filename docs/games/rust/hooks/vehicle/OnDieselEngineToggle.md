---
hide_table_of_contents: true
---

# OnDieselEngineToggle

## Usage

* Called when a player is trying to toggle diesel engine
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnDieselEngineToggle(BasePlayer player, DieselEngine engine)
{
    Puts("OnDieselEngineToggle works!");
    return null;
}
```
