---
hide_table_of_contents: true
---

# OnRfBroadcasterAdded

## Usage

* Called right after an object has started broadcasting an RF frequency
* No Return behavior

## Examples

```csharp title=""
void OnRfBroadcasterAdded(IRFObject obj, int frequency)
{
    Puts("OnRfBroadcasterAdded works!");
}
```
