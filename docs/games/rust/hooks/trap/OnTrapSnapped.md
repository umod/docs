---
hide_table_of_contents: true
---

# OnTrapSnapped

## Usage

* Called when a trap is triggered by a game object
* No return behavior

## Examples

```csharp title=""
void OnTrapSnapped(BaseTrapTrigger trap, GameObject gameObject, Collider collider)
{
    Puts("OnTrapSnapped works!");
}
```
